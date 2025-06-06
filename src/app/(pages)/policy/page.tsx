import PageBanner from "@/app/components/PageBanner";

export default function Policy() {
  return (
    <>
      <PageBanner title="Code of Conduct" />
      {/*  Room and learn  */}
      <article>
        <div className="min-h-screen container py-20 px-4">
          <div className="space-y-10 max-w-6xl m-auto text-center mb-10">
            <h2 className="text-5xl font-bold text-cyan-500">
              Roam and Learn – Code of Conduct
            </h2>
            <p className="text-2xl">
              At Roam and Learn, we believe that exploration and learning go
              hand-in-hand with respect, responsibility, and a positive
              attitude. To ensure a safe, fun, and enriching experience for
              everyone, all participants must follow this Code of Conduct:
            </p>
          </div>
          <div className="min-h-96 bg-no-repeat bg-center bg-cover bg-[url('/images/home-banner-background.png')] rounded-[2rem] overflow-hidden border border-gray-200 shadow-lg"></div>
        </div>
      </article>
    </>
  );
}
