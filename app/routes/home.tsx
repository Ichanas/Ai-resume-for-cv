import type { Route } from "./+types/home";
import Navbar from "~/components/Navbare";
import {resumes} from  "../const/index";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "REesumind" },
    { name: "description", content: "Smarte feedback to your dream  job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
  <section className="main-section">
      <div className="page-heading">
          <h1>Track your  Application & Resume Rating</h1>
          <h2>Review your submission and check the status</h2>
      </div>

{resumes.length >0 &&(
  <div className="resumes-section">
   {resumes.map((resume)=>(
     <ResumeCard key={resume.id} resume={resume}/>
    ))  
  }
</div>

) }
</section>






  </main>;
}
