import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { useAllArticles, useCreateArticle, useUpdateArticle, useDeleteArticle } from "@/hooks/useArticles";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, Eye, EyeOff, LogOut } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function AdminDashboard() {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: articles, isLoading } = useAllArticles();
  const createArticle = useCreateArticle();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();

  const [editing, setEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    read_time: "",
    image_url: "",
    published: false,
    featured: false,
  });

  if (authLoading) return null;
  if (!user) {
    navigate("/admin/login");
    return null;
  }

  const resetForm = () => {
    setForm({ title: "", slug: "", excerpt: "", content: "", category: "", read_time: "", image_url: "", published: false, featured: false });
    setEditing(null);
    setShowForm(false);
  };

  const handleSave = async () => {
    if (!form.title || !form.excerpt) {
      toast({ title: "Missing fields", description: "Title and excerpt are required", variant: "destructive" });
      return;
    }

    const slug = form.slug || slugify(form.title);

    try {
      if (editing) {
        await updateArticle.mutateAsync({ id: editing, ...form, slug });
        toast({ title: "Article updated" });
      } else {
        await createArticle.mutateAsync({ ...form, slug, author_id: user.id });
        toast({ title: "Article created" });
      }
      resetForm();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleEdit = (article: any) => {
    setForm({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content || "",
      category: article.category,
      read_time: article.read_time || "",
      image_url: article.image_url || "",
      published: article.published,
      featured: article.featured,
    });
    setEditing(article.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    try {
      await deleteArticle.mutateAsync(id);
      toast({ title: "Article deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleTogglePublish = async (article: any) => {
    try {
      await updateArticle.mutateAsync({ id: article.id, published: !article.published });
      toast({ title: article.published ? "Article unpublished" : "Article published" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif text-white">Article Management</h1>
            <div className="flex gap-4">
              <Button
                onClick={() => { resetForm(); setShowForm(!showForm); }}
                className="bg-gold text-navy-deep hover:bg-gold/90"
              >
                <Plus size={16} className="mr-2" />
                New Article
              </Button>
              <Button
                onClick={async () => { await signOut(); navigate("/"); }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <section className="section-padding bg-secondary">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif text-foreground mb-6">
              {editing ? "Edit Article" : "New Article"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || slugify(e.target.value) })}
                  placeholder="Article title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Slug</label>
                <Input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="article-url-slug"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                  <Input
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g. Strategy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Read Time</label>
                  <Input
                    value={form.read_time}
                    onChange={(e) => setForm({ ...form, read_time: e.target.value })}
                    placeholder="e.g. 5 min read"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Image URL</label>
                <Input
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Excerpt</label>
                <Textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short description..."
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Content (Markdown supported)</label>
                <Textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Full article content..."
                  rows={12}
                />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  />
                  Published
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  />
                  Featured
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <Button onClick={handleSave} className="bg-gold text-navy-deep hover:bg-gold/90">
                  {editing ? "Update Article" : "Create Article"}
                </Button>
                <Button onClick={resetForm} variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-wide">
          {isLoading ? (
            <p className="text-muted-foreground">Loading articles...</p>
          ) : articles && articles.length > 0 ? (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-6 border border-border bg-background"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-serif text-foreground truncate">{article.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${article.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {article.published ? "Published" : "Draft"}
                      </span>
                      {article.featured && (
                        <span className="text-xs px-2 py-0.5 rounded bg-gold/20 text-gold">Featured</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleTogglePublish(article)}
                      title={article.published ? "Unpublish" : "Publish"}
                    >
                      {article.published ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleEdit(article)}>
                      <Pencil size={16} />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(article.id)} className="text-destructive">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No articles yet.</p>
              <Button onClick={() => setShowForm(true)} className="bg-gold text-navy-deep hover:bg-gold/90">
                Create your first article
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
