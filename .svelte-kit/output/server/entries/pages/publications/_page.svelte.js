import { a7 as head, a3 as attr } from "../../../chunks/index.js";
import { N as Navbar, S as Socialbar } from "../../../chunks/Socialbar.js";
import { T as Tabs, a as TabItem } from "../../../chunks/Tabs.js";
function _page($$payload) {
  function doiLink(doi) {
    return `https://doi.org/${doi}`;
  }
  let activeTab = 0;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Publications &amp; Patents</title>`;
    $$payload2.out += `<meta name="description" content="Publications, conference proceedings, and patents of Will Lunden">`;
  });
  Navbar($$payload, { activePage: "publications" });
  $$payload.out += `<!----> <div class="m-6 mx-auto flex min-h-screen max-w-5xl flex-col pr-5 pl-5 text-left">`;
  Tabs($$payload, {
    style: "default",
    class: "mt-2",
    children: ($$payload2) => {
      TabItem($$payload2, {
        title: "Publications",
        open: activeTab === 0,
        children: ($$payload3) => {
          $$payload3.out += `<h1 class="mb-4 text-3xl"><i class="fa fa-feather" aria-hidden="true"></i> Publications</h1> <p class="mb-5 text-gray-700">Here are my academic publications and conference proceedings related to quantum degenerate
				gases and atomic timekeeping technology. Click on the DOI to view the full text.</p> <dl class="grid grid-cols-1 gap-y-5 text-gray-700 mb-12"><div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Laser cooling Sr to microkelvin temperature with an integrated-photonics system</dt> <dd class="md:col-span-3"><p class="mb-1">Date: April 2024</p> <a href="https://arxiv.org/abs/2404.13210" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">arXiv:2404.13210</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Suppressing dipolar relaxation in thin layers of dysprosium atoms</dt> <dd class="md:col-span-3"><p class="mb-1">Date: April 2024</p> <a${attr("href", doiLink("10.1038/s41467-024-47260-1"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1038/s41467-024-47260-1</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Optical clocks at sea</dt> <dd class="md:col-span-3"><p class="mb-1">Date: August 2023</p> <a${attr("href", doiLink("10.1038/s41586-024-07225-2"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1038/s41586-024-07225-2</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Femtosecond-level time transfer enabled by low-loss integrated photonics</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <a${attr("href", doiLink("10.1364/fio.2023.fth1b.3"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/fio.2023.fth1b.3</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Towards a Strontium Optical Clock System with Metasurface Optics and Integrated
						Nonlinear Photonics</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2023</p> <a${attr("href", doiLink("10.1364/cleo_si.2023.sm2k.2"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/cleo_si.2023.sm2k.2</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Alignment-free Sr MOT with integrated metasurfaces for a compact Sr optical clock</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2023</p> <a${attr("href", doiLink("10.1364/cleo_si.2023.sw4o.2"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/cleo_si.2023.sw4o.2</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Integrating planar photonics for multi-beam generation and atomic clock packaging on
						chip</dt> <dd class="md:col-span-3"><p class="mb-1">Date: April 2023</p> <a${attr("href", doiLink("10.1038/s41377-023-01081-x"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1038/s41377-023-01081-x</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Integrated Photonics for a Compact Strontium Optical Clock</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2022</p> <a${attr("href", doiLink("10.1364/cleo_si.2022.sf2k.7"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/cleo_si.2022.sf2k.7</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">A scalable infrastructure for strontium optical clocks</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2022</p> <a${attr("href", doiLink("10.1364/cleo_si.2022.stu5o.1"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/cleo_si.2022.stu5o.1</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Inverse Design of Visible Integrated Photonics for an Ultracold Strontium Optical Clock</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2021</p> <a${attr("href", doiLink("10.1364/cleo_si.2021.sf2b.4"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1364/cleo_si.2021.sf2b.4</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Enhancing the capture velocity of a Dy magneto-optical trap with two-stage slowing</dt> <dd class="md:col-span-3"><p class="mb-1">Date: June 2020</p> <a${attr("href", doiLink("10.1103/PhysRevA.101.063403"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1103/PhysRevA.101.063403</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Interaction spectroscopy of a two-component Mott insulator</dt> <dd class="md:col-span-3"><p class="mb-1">Date: March 2019</p> <a${attr("href", doiLink("10.1103/PhysRevA.99.033612"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1103/PhysRevA.99.033612</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Observation of two-beam collective scattering phenomena in a Bose-Einstein condensate</dt> <dd class="md:col-span-3"><p class="mb-1">Date: November 2017</p> <a${attr("href", doiLink("10.1103/PhysRevA.96.051603"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1103/PhysRevA.96.051603</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Model for describing resonance-enhanced strong-field ionization with shaped ultrafast
						laser pulses</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2014</p> <a${attr("href", doiLink("10.1103/PHYSREVA.89.053403"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1103/PHYSREVA.89.053403</a></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Discrimination between strong-field molecular ionization pathways using ultrafast pulse
						shaping</dt> <dd class="md:col-span-3"><p class="mb-1">Date: May 2014</p> <a${attr("href", doiLink("10.1103/PHYSREVA.89.053404"))} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">DOI:10.1103/PHYSREVA.89.053404</a></dd></div></dl>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TabItem($$payload2, {
        title: "Patents",
        open: activeTab === 1,
        children: ($$payload3) => {
          $$payload3.out += `<h1 class="mb-4 text-3xl"><i class="fa fa-tools" aria-hidden="true"></i> Patents</h1> <p class="mb-5 text-gray-700">The following patents or patent applications are either active or pending.</p> <dl class="grid grid-cols-1 gap-y-5 text-gray-700 mb-5"><div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Frequency standard immune to laser wavelength variation and aging</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <p>Status: Active</p></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Vector noise subtraction in vapor cell spectroscopy</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <p>Status: Active</p></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Optical bench for spectroscopy</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <p>Status: Pending</p></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Algorithmic coil design</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <p>Status: Pending</p></dd></div> <div class="grid grid-cols-1 gap-x-2 md:grid-cols-4"><dt class="mb-1 font-semibold md:mb-0">Noise mitigation in vapor cell spectroscopy</dt> <dd class="md:col-span-3"><p class="mb-1">Date: 2023</p> <p>Status: Pending</p></dd></div></dl>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Socialbar($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
