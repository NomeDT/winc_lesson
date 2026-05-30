'use client';

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Section } from "@/components/Section";
import { SkillList } from "@/components/SkillList";
import { Widget } from "@/components/Widget";

export default function Home() {
  const [aboutText, setAboutText] = useState(
    "こんにちは!徳永大馳です。そろそろ中間がやばいので頑張ります。"
  );
  const [likeCount, setLikeCount] = useState(10000000);
  const [tempStatus, setTempStatus] = useState("");
  const skills = ["HTML","CSS","Javascript","C#","Next.js", "React", "TypeScript", "Tailwind CSS", "Git"];

  const handleStatusSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (tempStatus.trim()) {
      setAboutText(tempStatus);
      setTempStatus("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* [Week 10 新規追加] サイドバー領域 (Tailwind CSS でスタイリング) */}
      <Sidebar name="Daichi Tokunaga" role="React Developer"></Sidebar>

      {/* メインコンテンツ領域 */}
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/*ステータス更新フォーム*/}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-400 uppercase mb-4">Update Status</h2>
            <form onSubmit={handleStatusSubmit} className="flex gap-2">
              <input
                type="text" 
                value={tempStatus}
                onChange={(e) => setTempStatus(e.target.value)}
                placeholder="今何してる？"
                className="flex-1 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                更新
              </button>
            </form>
          </section>

          {/* プロフィールセクション */}
          <Section title = "About Me">
            <p className="text-slate-600 leading-relaxed">
              {aboutText}
            </p>
          </Section>

          {/* ウィジェットエリア (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget label="Latest Project" title="my-identity-dashboard" description="Refactoring to Next.js..."></Widget>
            <Widget label="Support">
              <button onClick={() => setLikeCount(likeCount + 1)} className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition-colors">
                ❤️ {likeCount} Likes
              </button>
            </Widget>
          </div>

          {/* スキル一覧 */}
          <Section title="Skills">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillList key = {skill} name={skill}/>
              ))}
            </div>
          </Section>

        </div>
      </main>
    </div>
  );
}
