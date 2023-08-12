import { CacheBuster } from "@/components/cache-buster";
import { Language, isValidLanguage } from "@/config/languages";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { getRandomSnippet } from "../race/(play)/loaders";
import NoSnippet from "../race/_components/no-snippet";
import RacePractice from "../race/_components/race/race-practice";
import RaceTheme from "./_components/race-theme";
import ColorPalette from "./_components/color-pallete";

export default async function ThemeBuilderPage() {
  const user = await getCurrentUser();
  const language = "javascript";
  const isValidLang = isValidLanguage(language);

  const snippet = await getRandomSnippet({ language: language });

  return (
    <main>
      <CacheBuster />
      {snippet && (
        <div className="pt-8">
          <RaceTheme snippet={snippet} user={user} />
        </div>
      )}
      {!snippet && (
        <NoSnippet
          message={"Looks like there is no snippet available yet. Create one?"}
          language={language}
        />
      )}
      <ColorPalette />
    </main>
  );
}
