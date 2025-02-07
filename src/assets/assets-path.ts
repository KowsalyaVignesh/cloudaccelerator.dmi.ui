import { environment } from "../environments/environment";

// currently not required. Remove this
export class AssetsPath {
    public static readonly baseUrl = environment.assetBaseUrl;
    public static readonly brandingAssets ={
        // logo: `${AssetsPath.baseUrl}logo.png`,
        // logo:'cloudaccelerator.dmi.ui/src/release-instance/development/assets/logo.png'
    }
}