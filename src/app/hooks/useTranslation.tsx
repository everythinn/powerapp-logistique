import frHeader from '../context/fr-translations/headers.json';
import frHomepage from "../context/fr-translations/homepage.json";
import frAdminpage from '../context/fr-translations/adminpage.json'
import frAddpage from '../context/fr-translations/add.json';
import frEditpage from '../context/fr-translations/edit.json';
import enHeader from '../context/en-translations/headers.json';
import enHomepage from "../context/en-translations/homepage.json";
import enAdminpage from '../context/en-translations/adminpage.json'
import enAddpage from '../context/en-translations/add.json';
import enEditpage from '../context/en-translations/edit.json';
import { useLang } from "../context/langContext";

type Namespace = "header" | "homepage" | "adminpage" | "addpage" | "editpage";

const resources = {
  FR: {
    header: frHeader,
    homepage: frHomepage,
    adminpage: frAdminpage,
    addpage: frAddpage,
    editpage: frEditpage,
  },
  EN: {
    header: enHeader,
    homepage: enHomepage,
    adminpage: enAdminpage,
    addpage: enAddpage,
    editpage: enEditpage,
  },
};

export function useTranslation(namespace: Namespace) {
  const { lang } = useLang();

  // pick dictionary
  const dict = resources[lang as "FR" | "EN"][namespace];

  return dict;
}
