import { separatorDataRouter } from "@cloakwp/block-data-routers";
import { Separator } from "@cloakui/react-primitives";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
export const separator = configurableBlockPreset("core/separator", {
    dataRouter: separatorDataRouter,
    component: Separator,
});