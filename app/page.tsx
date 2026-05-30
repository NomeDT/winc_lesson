import { Sidebar } from "@/components/Sidebar";
import { Section } from "@/components/Section";
import { SkillList } from "@/components/SkillList";
import { Widget } from "@/components/Widget";

export default function Home() {
  const skills = ["HTML","CSS","Javascript","C#","Next.js", "React", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* [Week 10 新規追加] サイドバー領域 (Tailwind CSS でスタイリング) */}
      <Sidebar name="Daichi Tokunaga" role="React Developer"></Sidebar>

      {/* メインコンテンツ領域 */}
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* プロフィールセクション */}
          <Section title = "About Me">
            <p className="text-slate-600 leading-relaxed">
              こんにちは!徳永大馳です。これまで Vanilla JS で作ってきたダッシュボードを、
              今週から Next.js と Tailwind CSS でリプレースしています。
              コンポーネント化することで、より管理しやすく拡張性の高いアプリを目指します！
            </p>
          </Section>

          {/* ウィジェットエリア (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget label="Latest Project" title="my-identity-dashboard" description="Refactoring to Next.js..."></Widget>
            <Widget label="Support">
              <button className="border-2 border-red-400 text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-50 transition-colors">
                ❤️ 0 Likes
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
