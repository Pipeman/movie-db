global.fetch = require('jest-fetch-mock')

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "babel-polyfill";

configure({ adapter: new Adapter() });