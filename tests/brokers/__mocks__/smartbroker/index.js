export const buySamples = [require('./buy/buy_stock_US0028241000.json')];

export const sellSamples = [require('./sell/sell_comission_vanguard.json')];

export const dividendSamples = [
  require('./dividend/dividend_etf_usd.json'),
  require('./dividend/dividend_stock_usd.json'),
  require('./dividend/dividend_stock_usd_2.json'),
  require('./dividend/2020_pan_american_silver.json'),
  require('./dividend/2020_ishares_global_clean_energy.json'),
  require('./dividend/2021_ish_eo_st.json'),
  require('./dividend/2021_wp_carey_inc.json'),
];

export const ignoredSamples = [require('./ignored/2020_ex_ante_cost.json')];

export const allSamples = buySamples.concat(
  sellSamples,
  dividendSamples,
  ignoredSamples
);
