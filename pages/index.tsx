import Main from "@/components/layouts/Main";
import MoreInfoSection from "@/components/MoreInfoSection/MoreInfoSection";
import SideBar from "@/components/SideBar/SideBar";
import SummarySection from "@/components/SummarySection/SummarySection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fintech Frontend Assessment</title>
        <meta name="description" content="Fintech frontend assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main className="flex">
        <SideBar />
        <SummarySection />
        <MoreInfoSection />
      </Main>
    </>
  );
}
