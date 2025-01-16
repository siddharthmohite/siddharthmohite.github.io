import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Video" },
    { name: "description", content: "Embedded video in Remix portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full h-full flex items-center justify-center">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="public/10sec.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
