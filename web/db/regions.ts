import {
  AnemoHypostasis,
  BeneathTheDragonQueller,
  CeciliaGarden,
  ClearPoolAndMountainCavern,
  ConfrontStormterror,
  CourtOfFlowingSand,
  CryoHypostasis,
  CryoRegisvine,
  Domain,
  DomainOfGuyun,
  ElectroHypostasis,
  EnterTheGoldenHouse,
  ForsakenRift,
  GeoHypostasis,
  GoldenWolflord,
  HiddenPalaceOfLianshanFormula,
  HiddenPalaceOfZhouFormula,
  HydroHypostasis,
  MaguuKenki,
  MidsummerCourtyard,
  MomijiDyedCourt,
  NarukamiIslandTenshukaku,
  PeakOfVindagnyr,
  PerpetualMechanicalArray,
  PrimoGeovishap,
  PyroHypostasis,
  PyroRegisvine,
  RhodeiaOfLoch,
  RidgeWatch,
  SlumberingCourt,
  TaishanMansion,
  ThunderManifestation,
  ValleyOfRemembrance,
  VioletCourt,
  WolfOfTheNorthChallenge,
} from "./domains";
import {
  Albedo,
  Amber,
  Ayaka,
  Barbara,
  Beidou,
  Bennett,
  Character,
  Chongyun,
  Diluc,
  Diona,
  Eula,
  Fischl,
  Ganyu,
  Gorou,
  Itto,
  Jean,
  Kaeya,
  Kazuha,
  Keqing,
  Klee,
  Kokomi,
  KujouSara,
  Lisa,
  Mona,
  Ningguang,
  Noelle,
  Qiqi,
  RaidenShogun,
  Razor,
  Sayu,
  Shenhe,
  Sucrose,
  Tartaglia,
  Thoma,
  Venti,
  Xiangling,
  Xiao,
  Xingqiu,
  Xinyan,
  Yanfei,
  Yoimiya,
  YunJin,
  Zhongli,
} from "./characters";
import { registerMessage } from "../utils";

export type Region = {
  type: "Region";
  name: string;
  wiki: string;
  domains: Domain[];
  characters: Character[];
};

registerMessage({ defaultMessage: "Region" });

export const Mondstadt: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Mondstadt" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Mondstadt",
  domains: [
    CeciliaGarden,
    MidsummerCourtyard,
    ValleyOfRemembrance,
    ForsakenRift,
    ConfrontStormterror,
    WolfOfTheNorthChallenge,
    PeakOfVindagnyr,
    AnemoHypostasis,
    CryoRegisvine,
    CryoHypostasis,
    ElectroHypostasis,
  ],
  characters: [
    Albedo,
    Amber,
    Barbara,
    Bennett,
    Diluc,
    Diona,
    Eula,
    Fischl,
    Jean,
    Kaeya,
    Klee,
    Lisa,
    Mona,
    Noelle,
    Razor,
    Sucrose,
    Venti,
  ],
};

export const Liyue: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Liyue" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Liyue",
  domains: [
    HiddenPalaceOfLianshanFormula,
    DomainOfGuyun,
    HiddenPalaceOfZhouFormula,
    ClearPoolAndMountainCavern,
    TaishanMansion,
    EnterTheGoldenHouse,
    BeneathTheDragonQueller,
    RidgeWatch,
    PrimoGeovishap,
    GeoHypostasis,
    RhodeiaOfLoch,
    PyroRegisvine,
  ],
  characters: [
    Beidou,
    Chongyun,
    Ganyu,
    Keqing,
    Ningguang,
    Qiqi,
    Shenhe,
    Xiangling,
    Xiao,
    Xingqiu,
    Xinyan,
    Yanfei,
    YunJin,
    Zhongli,
  ],
};

export const Inazuma: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Inazuma" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Inazuma",
  domains: [
    MomijiDyedCourt,
    VioletCourt,
    CourtOfFlowingSand,
    MaguuKenki,
    PyroHypostasis,
    PerpetualMechanicalArray,
    ThunderManifestation,
    HydroHypostasis,
    NarukamiIslandTenshukaku,
    GoldenWolflord,
    SlumberingCourt,
  ],
  characters: [Ayaka, Gorou, Itto, Kazuha, Kokomi, KujouSara, RaidenShogun, Sayu, Thoma, Yoimiya],
};

export const Snezhnaya: Region = {
  type: "Region",
  name: registerMessage({ defaultMessage: "Snezhnaya" }),
  wiki: "https://genshin-impact.fandom.com/wiki/Snezhnaya",
  domains: [],
  characters: [Tartaglia],
};

export const Regions = [Mondstadt, Liyue, Inazuma, Snezhnaya];
