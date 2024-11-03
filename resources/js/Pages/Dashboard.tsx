import SearchSection from "@/Components/SearchSection";
import TemplateList from "@/Components/TemplateList";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
export default function Dashboard({ success }: { success: string }) {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <>
      <Head title="Dashboard"></Head>

      <MainLayout>
        <div className="mt-10 flex flex-col gap-y-4">
          {/* Search section */}
          <SearchSection
            onSearchInput={(value: string) => setSearchInput(value)}
          ></SearchSection>

          {/* Template List Section */}
          <TemplateList searchInput={searchInput}></TemplateList>
        </div>
      </MainLayout>
    </>
  );
}
