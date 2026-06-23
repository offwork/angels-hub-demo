import config from "./meta.json";

type Config = {
  readonly twitter_account: string;
  readonly twitter_creator: string;
  readonly linkedin_account: string;
  readonly instagram_account: string;
  readonly medium_account: string;
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly posts_per_page: number;
  readonly pages: any;
};

export default config as unknown as Config;