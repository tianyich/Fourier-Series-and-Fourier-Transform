import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
import katex from "katex";
import "d3";
function katexify(math, displayMode = false) {
  const options = {
    displayMode,
    throwOnError: false,
    output: "mathml"
  };
  return katex.renderToString(math, options);
}
const css$2 = {
  code: "#intro.svelte-121so3b.svelte-121so3b{background-color:#f9f9f9;padding:20px;margin:20px;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1)}#intro.svelte-121so3b h1.svelte-121so3b{color:#333;font-size:2em;margin-bottom:10px}#intro.svelte-121so3b p.svelte-121so3b{color:#666;line-height:1.6}",
  map: `{"version":3,"file":"Title.svelte","sources":["Title.svelte"],"sourcesContent":["<script>\\r\\n    import katexify from \\"../katexify\\";\\r\\n    const def = \`f(x) \\\\\\\\sim \\\\\\\\sum_{n=-\\\\\\\\infty}^\\\\\\\\infty \\\\\\\\hat{f}(n) e^{inx}\`;\\r\\n\\r\\n\\r\\n<\/script>\\r\\n<section id='intro'>\\r\\n    <h1> Fourier Series and Fourier Transform</h1>\\r\\n    <p> Fourier series and Fourier transform are mathematical tools that are used to analyze and synthesize functions. They are widely used in signal processing, \\r\\n        image processing, and many other fields. Fourier series uses linear combinations of sines and cosines to approximate a function. \\r\\n    </p>\\r\\n    <p> \\r\\n        The Fourier series of a function {@html katexify('f(x)')} is given by: \\r\\n    </p>\\r\\n    <p>\\r\\n        {@html katexify(def,true)}\\r\\n        Where {@html katexify('\\\\\\\\hat{f}(n)')} is the {@html katexify('n^{th}')} Fourier coefficient of the function {@html katexify('f(x)')}.\\r\\n    </p>\\r\\n   \\r\\n</section>\\r\\n<style>\\r\\n    #intro {\\r\\n        background-color: #f9f9f9;\\r\\n        padding: 20px;\\r\\n        margin: 20px;\\r\\n        border-radius: 10px;\\r\\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\\r\\n    }\\r\\n\\r\\n    #intro h1 {\\r\\n        color: #333;\\r\\n        font-size: 2em;\\r\\n        margin-bottom: 10px;\\r\\n    }\\r\\n\\r\\n    #intro p {\\r\\n        color: #666;\\r\\n        line-height: 1.6;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAqBI,oCAAO,CACH,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1C,CAEA,qBAAM,CAAC,iBAAG,CACN,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,IACnB,CAEA,qBAAM,CAAC,gBAAE,CACL,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,GACjB"}`
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const def = `f(x) \\sim \\sum_{n=-\\infty}^\\infty \\hat{f}(n) e^{inx}`;
  $$result.css.add(css$2);
  return `<section id="intro" class="svelte-121so3b"><h1 class="svelte-121so3b" data-svelte-h="svelte-1qp5c9m">Fourier Series and Fourier Transform</h1> <p class="svelte-121so3b" data-svelte-h="svelte-53xd2s">Fourier series and Fourier transform are mathematical tools that are used to analyze and synthesize functions. They are widely used in signal processing, 
        image processing, and many other fields. Fourier series uses linear combinations of sines and cosines to approximate a function.</p> <p class="svelte-121so3b">The Fourier series of a function <!-- HTML_TAG_START -->${katexify("f(x)")}<!-- HTML_TAG_END --> is given by:</p> <p class="svelte-121so3b"><!-- HTML_TAG_START -->${katexify(def, true)}<!-- HTML_TAG_END -->
        Where <!-- HTML_TAG_START -->${katexify("\\hat{f}(n)")}<!-- HTML_TAG_END --> is the <!-- HTML_TAG_START -->${katexify("n^{th}")}<!-- HTML_TAG_END --> Fourier coefficient of the function <!-- HTML_TAG_START -->${katexify("f(x)")}<!-- HTML_TAG_END -->.</p> </section>`;
});
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: ".function-button.svelte-eju0sm.svelte-eju0sm{top:10px;left:10px;background-color:#4caf50;border:none;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:12px;transition-duration:0.4s;width:200px;height:50px;overflow:hidden;top:10px;left:10px}.function-button.svelte-eju0sm.svelte-eju0sm:hover{background-color:white;color:black;border:2px solid #4caf50}.buttons.svelte-eju0sm.svelte-eju0sm{display:flex;flex-direction:row;justify-content:flex-start;position:relative;align-items:left}ul.svelte-eju0sm.svelte-eju0sm{list-style-type:none;padding:0;margin:0}.spacer.svelte-eju0sm.svelte-eju0sm{height:40vh}.plot-container.svelte-eju0sm.svelte-eju0sm{position:sticky;top:10%;width:50%;height:80%;border:3px solid black}.section-container.svelte-eju0sm.svelte-eju0sm{margin-top:1em;text-align:center;transition:background 100ms;display:flex}.step.svelte-eju0sm.svelte-eju0sm{height:110vh;display:flex;place-items:end;justify-content:center}.step-content.svelte-eju0sm.svelte-eju0sm{font-size:18px;background:var(--bg);color:#ccc;border-radius:1px;padding:0.5rem 1rem;display:flex;flex-direction:column;justify-content:center;transition:background 500ms ease;text-align:left;width:75%;margin-left:0;max-width:500px;font-family:var(--font-main);line-height:1.3;border:5px solid var(--default)}.step.active.svelte-eju0sm .step-content.svelte-eju0sm{background:#f1f3f3ee;color:var(--squid-ink)}.steps-container.svelte-eju0sm.svelte-eju0sm{height:100%}.steps-container.svelte-eju0sm.svelte-eju0sm{flex:1 1 40%;z-index:10}",
  map: `{"version":3,"file":"Plot.svelte","sources":["Plot.svelte"],"sourcesContent":["<script>\\r\\n    import * as d3 from \\"d3\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import katexify from \\"../katexify\\";\\r\\n    import Scrolly from \\"./Scrolly.svelte\\";\\r\\n    let svg;\\r\\n    let sliderValue = 0;\\r\\n    let selectedFunction = \\"f1\\";\\r\\n    let scroll_value;\\r\\n\\r\\n    const f1 = (x) => Math.pow(x, 2);\\r\\n    const f2 = (x) => Math.pow(Math.E, x);\\r\\n    const f3 = (x) => Math.sign(Math.sin(x));\\r\\n    const f4 = (x) =>\\r\\n        Math.abs(x) <= 1 ? Math.sqrt(Math.pow(1, 2) - Math.pow(x, 2)) : 0;\\r\\n    const functions = {\\r\\n        f1: { func: f1, latex: \\"f(x) = x^2\\" },\\r\\n        f2: { func: f2, latex: \\"f(x) = e^x\\" },\\r\\n        f3: { func: f3, latex: \\"f(x) = sign(sin(x))\\" },\\r\\n        f4: { func: f4, latex: \\"f(x) = \\\\\\\\sqrt{1^2 - x^2}\\" },\\r\\n    };\\r\\n    const integrate = (f, a, b, n = 1000) => {\\r\\n        const h = (b - a) / n;\\r\\n        let sum = 0.5 * (f(a) + f(b));\\r\\n        for (let i = 1; i < n; i++) {\\r\\n            sum += f(a + i * h);\\r\\n        }\\r\\n        return sum * h;\\r\\n    };\\r\\n\\r\\n    const calculateCoefficients = (n, f) => {\\r\\n        const a = [];\\r\\n        const b = [];\\r\\n        for (let i = 0; i <= n; i++) {\\r\\n            a[i] =\\r\\n                (1 / Math.PI) *\\r\\n                integrate((x) => f(x) * Math.cos(i * x), -Math.PI, Math.PI);\\r\\n            b[i] =\\r\\n                (1 / Math.PI) *\\r\\n                integrate((x) => f(x) * Math.sin(i * x), -Math.PI, Math.PI);\\r\\n        }\\r\\n        return { a, b };\\r\\n    };\\r\\n\\r\\n    // Define the function to generate the Fourier series\\r\\n    const generateFourierSeries = (a, b, x) => {\\r\\n        let sum = a[0] / 2;\\r\\n        for (let i = 1; i < a.length; i++) {\\r\\n            sum += a[i] * Math.cos(i * x) + b[i] * Math.sin(i * x);\\r\\n        }\\r\\n        return sum;\\r\\n    };\\r\\n\\r\\n    const generatePlot = () => {\\r\\n        const f = (x) => functions[selectedFunction].func(x);\\r\\n        const svg1 = d3.select(svg);\\r\\n        svg1.selectAll(\\"path\\").remove();\\r\\n        svg1.selectAll(\\"g\\").remove();\\r\\n        const width = 500,\\r\\n            height = 500,\\r\\n            padding = 5;\\r\\n\\r\\n        const xScale = d3\\r\\n            .scaleLinear()\\r\\n            .domain([-3, 3.2])\\r\\n            .range([padding, width-padding]);\\r\\n        const yScale = d3\\r\\n            .scaleLinear()\\r\\n            .domain([-3, 3])\\r\\n            .range([height-padding, padding]);\\r\\n\\r\\n        // Define the line generator\\r\\n        const line = d3\\r\\n            .line()\\r\\n            .x((d) => xScale(d.x))\\r\\n            .y((d) => yScale(d.y));\\r\\n\\r\\n        // Generate the data\\r\\n        const originalData = d3\\r\\n            .range(-Math.PI, Math.PI, 0.1)\\r\\n            .map((x) => ({ x: x, y: f(x) }));\\r\\n        svg1.append(\\"path\\")\\r\\n            .datum(originalData)\\r\\n            .attr(\\"fill\\", \\"none\\")\\r\\n            .attr(\\"stroke\\", \\"red\\")\\r\\n            .attr(\\"stroke-width\\", 2)\\r\\n            .attr(\\"d\\", line);\\r\\n\\r\\n        // Draw the axes\\r\\n        const xAxis = d3\\r\\n            .axisBottom(xScale)\\r\\n            .tickValues(d3.range(-3, 3, 0.5))\\r\\n            .tickFormat((d) => (d === 0 ? \\"0\\" : d3.format(\\".1f\\")(d)));\\r\\n        const yAxis = d3.axisLeft(yScale).tickValues(d3.range(-3, 3.2, 0.5));\\r\\n        const xAxisGroup = svg1\\r\\n            .append(\\"g\\")\\r\\n            .attr(\\"transform\\", \`translate(0,\${yScale(0)})\`)\\r\\n            .call(xAxis);\\r\\n        const yAxisGroup = svg1\\r\\n            .append(\\"g\\")\\r\\n            .attr(\\"transform\\", \`translate(\${xScale(0)},0)\`)\\r\\n            .call(yAxis);\\r\\n        xAxisGroup\\r\\n            .selectAll(\\"text\\")\\r\\n            .filter((d) => d === 0)\\r\\n            .attr(\\"text-anchor\\", \\"end\\")\\r\\n            .attr(\\"dx\\", \\"-.8em\\");\\r\\n        yAxisGroup\\r\\n            .selectAll(\\"text\\")\\r\\n            .filter((d) => d === 0)\\r\\n            .style(\\"display\\", \\"none\\");\\r\\n\\r\\n        const { a, b } = calculateCoefficients(sliderValue, f);\\r\\n        const data = d3\\r\\n            .range(-Math.PI, Math.PI, 0.1)\\r\\n            .map((x) => ({ x: x, y: generateFourierSeries(a, b, x) }));\\r\\n\\r\\n        svg1.append(\\"path\\")\\r\\n            .datum(data)\\r\\n            .attr(\\"fill\\", \\"none\\")\\r\\n            .attr(\\"stroke\\", \\"steelblue\\")\\r\\n            .attr(\\"stroke-width\\", 2)\\r\\n            .attr(\\"d\\", line);\\r\\n    };\\r\\n\\r\\n    const selectFunction = (key) => {\\r\\n        selectedFunction = key;\\r\\n        generatePlot();\\r\\n    };\\r\\n    onMount(generatePlot);\\r\\n    $: steps = [\\r\\n        \`<h1 class='step-title'>Step 1</h1>\\r\\n       <br><br>\\r\\n      <p>\\r\\n       Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?\\r\\n      </p>\`,\\r\\n        \`<h1 class='step-title'>Step 2</h1>\\r\\n      <p>\\r\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?\\r\\n        </p>\\r\\n    <br><br>\\r\\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?\\r\\n  \`,\\r\\n    ];\\r\\n<\/script>\\r\\n\\r\\n<main>\\r\\n    <section>\\r\\n        <!-- scroll container -->\\r\\n        <div class=\\"section-container\\">\\r\\n            <div class=\\"plot-container\\" id=plot>\\r\\n                <div class=\\"plot\\">\\r\\n                    <input\\r\\n                        type=\\"range\\"\\r\\n                        min=\\"0\\"\\r\\n                        max=\\"30\\"\\r\\n                        bind:value={sliderValue}\\r\\n                        on:input={generatePlot}\\r\\n                    />\\r\\n                    <div class='buttons'>\\r\\n                    <ul>\\r\\n                        {#each Object.keys(functions) as key}\\r\\n                            <li>\\r\\n                                <button\\r\\n                                    class=\\"function-button\\"\\r\\n                                    on:click={() => selectFunction(key)}\\r\\n                                >\\r\\n                                    {@html katexify(functions[key].latex, true)}\\r\\n                                </button>\\r\\n                            </li>\\r\\n                        {/each}\\r\\n                    </ul>\\r\\n                </div>\\r\\n                    <svg bind:this={svg} width='500' height='500' padding='0'></svg>\\r\\n                </div>\\r\\n                \\r\\n            </div>\\r\\n\\r\\n            <div class=\\"steps-container\\">\\r\\n                <Scrolly bind:scroll_value>\\r\\n                    {#each steps as text, i}\\r\\n                        <div class=\\"step\\" class:active={scroll_value === i}>\\r\\n                            <div class=\\"step-content\\">{@html text}</div>\\r\\n                        </div>\\r\\n                    {/each}\\r\\n                    <div class=\\"spacer\\" />\\r\\n                </Scrolly>\\r\\n            </div>\\r\\n        </div>\\r\\n    </section>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n    .function-button {\\r\\n        top:10px;\\r\\n        left: 10px;\\r\\n        background-color: #4caf50; \\r\\n        border: none;\\r\\n        color: white;\\r\\n        padding: 15px 32px;\\r\\n        text-align: center;\\r\\n        text-decoration: none;\\r\\n        display: inline-block;\\r\\n        font-size: 16px;\\r\\n        margin: 4px 2px;\\r\\n        cursor: pointer;\\r\\n        border-radius: 12px;\\r\\n        transition-duration: 0.4s;\\r\\n        width: 200px; \\r\\n        height: 50px; \\r\\n        overflow: hidden; \\r\\n        top : 10px;\\r\\n        left: 10px;\\r\\n    }\\r\\n\\r\\n\\r\\n    .function-button:hover {\\r\\n        background-color: white;\\r\\n        color: black;\\r\\n        border: 2px solid #4caf50;\\r\\n    }\\r\\n\\r\\n    \\r\\n    .buttons {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        justify-content: flex-start;\\r\\n        position: relative;\\r\\n        align-items: left;\\r\\n    }\\r\\n\\r\\n    ul {\\r\\n        list-style-type: none;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .spacer {\\r\\n        height: 40vh;\\r\\n    }\\r\\n\\r\\n    .plot-container {\\r\\n        position: sticky;\\r\\n        top: 10%;\\r\\n        width: 50%;\\r\\n        height: 80%;\\r\\n        border: 3px solid black;\\r\\n    }\\r\\n\\r\\n    .section-container {\\r\\n        margin-top: 1em;\\r\\n        text-align: center;\\r\\n        transition: background 100ms;\\r\\n        display: flex;\\r\\n    }\\r\\n\\r\\n    .step {\\r\\n        height: 110vh;\\r\\n        display: flex;\\r\\n        place-items: end;\\r\\n        justify-content: center;\\r\\n    }\\r\\n\\r\\n    .step-content {\\r\\n        font-size: 18px;\\r\\n        background: var(--bg);\\r\\n        color: #ccc;\\r\\n        border-radius: 1px;\\r\\n        padding: 0.5rem 1rem;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        transition: background 500ms ease;\\r\\n        text-align: left;\\r\\n        width: 75%;\\r\\n        margin-left: 0;\\r\\n        max-width: 500px;\\r\\n        font-family: var(--font-main);\\r\\n        line-height: 1.3;\\r\\n        border: 5px solid var(--default);\\r\\n    }\\r\\n\\r\\n    .step.active .step-content {\\r\\n        background: #f1f3f3ee;\\r\\n        color: var(--squid-ink);\\r\\n    }\\r\\n\\r\\n    .steps-container {\\r\\n        height: 100%;\\r\\n    }\\r\\n\\r\\n    .steps-container {\\r\\n        flex: 1 1 40%;\\r\\n        z-index: 10;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiMI,4CAAiB,CACb,IAAI,IAAI,CACR,IAAI,CAAE,IAAI,CACV,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,GAAG,CACf,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IAAI,CACnB,mBAAmB,CAAE,IAAI,CACzB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAG,IAAI,CACV,IAAI,CAAE,IACV,CAGA,4CAAgB,MAAO,CACnB,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAGA,oCAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,UAAU,CAC3B,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IACjB,CAEA,8BAAG,CACC,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACZ,CAEA,mCAAQ,CACJ,MAAM,CAAE,IACZ,CAEA,2CAAgB,CACZ,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACtB,CAEA,8CAAmB,CACf,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,UAAU,CAAC,KAAK,CAC5B,OAAO,CAAE,IACb,CAEA,iCAAM,CACF,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,MACrB,CAEA,yCAAc,CACV,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,IAAI,CAAC,CACrB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,UAAU,CAAC,KAAK,CAAC,IAAI,CACjC,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,CAAC,CACd,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CACnC,CAEA,KAAK,qBAAO,CAAC,2BAAc,CACvB,UAAU,CAAE,SAAS,CACrB,KAAK,CAAE,IAAI,WAAW,CAC1B,CAEA,4CAAiB,CACb,MAAM,CAAE,IACZ,CAEA,4CAAiB,CACb,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACb,OAAO,CAAE,EACb"}`
};
const Plot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps;
  let svg;
  let sliderValue = 0;
  let scroll_value;
  const f1 = (x) => Math.pow(x, 2);
  const f2 = (x) => Math.pow(Math.E, x);
  const f3 = (x) => Math.sign(Math.sin(x));
  const f4 = (x) => Math.abs(x) <= 1 ? Math.sqrt(Math.pow(1, 2) - Math.pow(x, 2)) : 0;
  const functions = {
    f1: { func: f1, latex: "f(x) = x^2" },
    f2: { func: f2, latex: "f(x) = e^x" },
    f3: { func: f3, latex: "f(x) = sign(sin(x))" },
    f4: {
      func: f4,
      latex: "f(x) = \\sqrt{1^2 - x^2}"
    }
  };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    steps = [
      `<h1 class='step-title'>Step 1</h1>
       <br><br>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?
      </p>`,
      `<h1 class='step-title'>Step 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?
        </p>
    <br><br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint aut corrupti ullam neque quia labore laborum perspiciatis, molestias amet at, voluptatem ratione quaerat in sit minima reprehenderit molestiae, nobis sed. Earum facere exercitationem sit rerum, expedita magni nihil alias?
  `
    ];
    $$rendered = `<main><section> <div class="section-container svelte-eju0sm"><div class="plot-container svelte-eju0sm" id="plot"><div class="plot"><input type="range" min="0" max="30"${add_attribute("value", sliderValue, 0)}> <div class="buttons svelte-eju0sm"><ul class="svelte-eju0sm">${each(Object.keys(functions), (key) => {
      return `<li><button class="function-button svelte-eju0sm"><!-- HTML_TAG_START -->${katexify(functions[key].latex, true)}<!-- HTML_TAG_END --></button> </li>`;
    })}</ul></div> <svg width="500" height="500" padding="0"${add_attribute("this", svg, 0)}></svg></div></div> <div class="steps-container svelte-eju0sm">${validate_component(Scrolly, "Scrolly").$$render(
      $$result,
      { scroll_value },
      {
        scroll_value: ($$value) => {
          scroll_value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(steps, (text, i) => {
            return `<div class="${["step svelte-eju0sm", scroll_value === i ? "active" : ""].join(" ").trim()}"><div class="step-content svelte-eju0sm"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div> </div>`;
          })} <div class="spacer svelte-eju0sm"></div>`;
        }
      }
    )}</div></div></section> </main>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');main.svelte-1cv9hio{margin:0em;font-family:'Roboto', sans-serif;padding:0.5em;top:0px;left:20em;right:20em;width:100%;height:100vh;box-sizing:border-box;-ms-overflow-style:none;scrollbar-width:none}main.svelte-1cv9hio::-webkit-scrollbar{display:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    export const prerender = true;\\n    import Title from \\"../components/Title.svelte\\";\\n    import Plot from \\"../components/Plot.svelte\\";\\n    import Scrolly from \\"../components/Scrolly.svelte\\";\\n<\/script>\\n\\n<main>\\n    <Title />\\n    <Plot />\\n    <Scrolly />\\n</main>\\n\\n<style>\\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\\n    main {\\n        margin: 0em;\\n        font-family: 'Roboto', sans-serif;\\n        padding: 0.5em;\\n        top: 0px;\\n        left: 20em;\\n        right: 20em;\\n        width: 100%;\\n        height: 100vh;\\n        box-sizing: border-box;\\n        -ms-overflow-style: none; /* IE and Edge */\\n        scrollbar-width: none; /* Firefox */\\n    }\\n    main::-webkit-scrollbar {\\n        display: none;\\n    }\\n</style>"],"names":[],"mappings":"AAcI,QAAQ,gFAAgF,CACxF,mBAAK,CACD,MAAM,CAAE,GAAG,CACX,WAAW,CAAE,QAAQ,CAAC,CAAC,UAAU,CACjC,OAAO,CAAE,KAAK,CACd,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,UAAU,CACtB,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IACrB,CACA,mBAAI,mBAAoB,CACpB,OAAO,CAAE,IACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<main class="svelte-1cv9hio">${validate_component(Title, "Title").$$render($$result, {}, {}, {})} ${validate_component(Plot, "Plot").$$render($$result, {}, {}, {})} ${validate_component(Scrolly, "Scrolly").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
