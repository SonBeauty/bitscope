import Link from "next/link";
export default function SectionFooter() {
  return (
    <section className="newsletter_section">
      <div className="container">
        <div className="newsletter_box w-full ">
          <div className=" w-[100vw] flex flex-col px-4 md:flex-row gap-2 items-center justify-between">
            <h2 className="flex-2/3 font-bold text-3xl text-white">
              Use BitScope&apos;s service for free and share your thoughts.
            </h2>
            <Link
              href="#"
              className="nav-link btn px-8 py-2 puprple_btn border-2 border-white"
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}