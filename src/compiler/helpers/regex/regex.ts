export const ArrayRegex = /\[[\d]*\]/;
export const VariablesRegex = RegExp(`([.a-zA-Z_]([\\w.])*([\\w])(${ArrayRegex.source})?)*`);
export const FunctionsRegex = RegExp(`[a-zA-Z_]([\\w])*[\\w]: (${VariablesRegex.source}\\s?)*`);
export const Regex = RegExp(`{{(${VariablesRegex.source}|${FunctionsRegex.source})}}`, 'g');