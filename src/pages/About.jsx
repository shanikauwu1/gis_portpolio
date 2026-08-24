import Education from "../components/Education";
import Experience from "../components/Experience";

function About() {
  return (
    <main className="min-h-screen bg-white  text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Page Heading */}
        <section>
          <Experience />
          <Education />
        </section>
      </div>
    </main>
  );
}

export default About;
