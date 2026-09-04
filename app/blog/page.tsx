import Card from '@/components/Card'
import { useState } from 'react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '',
      date: '',
      excerpt: '',
      tags: [''],
      content: '',
    },
   ]

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
        <div className="container-custom">
          <h1>📝 Blog</h1>
          <p className="text-gray-600 mt-4">
            Geotechnical engineering, materials science, ve makine öğrenmesi hakkında yazılar
          </p>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  description={post.excerpt}
                  date={post.date}
                  tags={post.tags}
                  href={`/blog/${post.id}`}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="card mb-6">
              <h3 className="font-bold mb-4">🔍 Ara</h3>
              <input
                type="text"
                placeholder="Yazı ara..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Tags */}
            <div className="card">
              <h3 className="font-bold mb-4">🏷️ Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <a
                    key={tag}
                    href={`?tag=${tag}`}
                    className="badge badge-primary hover:bg-primary hover:text-white cursor-pointer text-xs"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="card mt-6 bg-blue-50">
              <h3 className="font-bold mb-4">📊 İstatistikler</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">{blogPosts.length}</span> yazı
                </p>
                <p>
                  <span className="font-semibold">{allTags.length}</span> etiket
                </p>
                <p>
                  <span className="font-semibold">2026</span> senesinden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
