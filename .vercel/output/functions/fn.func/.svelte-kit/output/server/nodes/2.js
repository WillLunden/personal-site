import * as universal from '../entries/pages/blog/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+layout.ts";
export const imports = ["_app/immutable/nodes/2.CZtHTBUV.js","_app/immutable/chunks/BGm1Ay_o.js","_app/immutable/chunks/CoADqiFQ.js","_app/immutable/chunks/D9MaXWBK.js","_app/immutable/chunks/BC5h68Y0.js","_app/immutable/chunks/l724nrnI.js","_app/immutable/chunks/BRIadG7O.js","_app/immutable/chunks/D9c1UxH6.js","_app/immutable/chunks/CknbixxF.js","_app/immutable/chunks/CnG9GFaM.js","_app/immutable/chunks/Bpy75fpF.js","_app/immutable/chunks/Biteisi2.js","_app/immutable/chunks/DOYvKiX5.js","_app/immutable/chunks/Co4c420I.js"];
export const stylesheets = ["_app/immutable/assets/all.D_gAAuTu.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.D_cYUPeE.woff2","_app/immutable/assets/fa-brands-400.D1LuMI3I.ttf","_app/immutable/assets/fa-regular-400.BjRzuEpd.woff2","_app/immutable/assets/fa-regular-400.DZaxPHgR.ttf","_app/immutable/assets/fa-solid-900.CTAAxXor.woff2","_app/immutable/assets/fa-solid-900.D0aA9rwL.ttf","_app/immutable/assets/fa-v4compatibility.C9RhG_FT.woff2","_app/immutable/assets/fa-v4compatibility.CCth-dXg.ttf"];
