import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";
import { Settings } from "luxon";

import mockLocalStorage from "./localStorageMock";

/**
 * Run once before every jest test file.
 */
mockLocalStorage();
configure({ adapter: new Adapter() });

// Setup dates to be US-centric
moment.locale("en-US");
Settings.defaultLocale = "en-US";
