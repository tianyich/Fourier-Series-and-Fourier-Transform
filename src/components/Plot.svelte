<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import katexify from "../katexify";
    import Scrolly from "./Scrolly.svelte";
    let svg;
    let sliderValue = 0;
    let selectedFunction = "f1";
    let scroll_value;

    const f1 = (x) => Math.pow(x, 2);
    const f2 = (x) => Math.pow(Math.E, x);
    const f3 = (x) => Math.sign(Math.sin(x));
    const f4 = (x) =>
        Math.abs(x) <= 1 ? Math.sqrt(Math.pow(1, 2) - Math.pow(x, 2)) : 0;
    const functions = {
        f1: { func: f1, latex: "f(x) = x^2" },
        f2: { func: f2, latex: "f(x) = e^x" },
        f3: { func: f3, latex: "f(x) = sign(sin(x))" },
        f4: { func: f4, latex: "f(x) = \\sqrt{1^2 - x^2}" },
    };
    const integrate = (f, a, b, n = 1000) => {
        const h = (b - a) / n;
        let sum = 0.5 * (f(a) + f(b));
        for (let i = 1; i < n; i++) {
            sum += f(a + i * h);
        }
        return sum * h;
    };

    const calculateCoefficients = (n, f) => {
        const a = [];
        const b = [];
        for (let i = 0; i <= n; i++) {
            a[i] =
                (1 / Math.PI) *
                integrate((x) => f(x) * Math.cos(i * x), -Math.PI, Math.PI);
            b[i] =
                (1 / Math.PI) *
                integrate((x) => f(x) * Math.sin(i * x), -Math.PI, Math.PI);
        }
        return { a, b };
    };

    // Define the function to generate the Fourier series
    const generateFourierSeries = (a, b, x) => {
        let sum = a[0] / 2;
        for (let i = 1; i < a.length; i++) {
            sum += a[i] * Math.cos(i * x) + b[i] * Math.sin(i * x);
        }
        return sum;
    };

    const generatePlot = () => {
        const f = (x) => functions[selectedFunction].func(x);
        const svg1 = d3.select(svg);
        svg1.selectAll("path").remove();
        svg1.selectAll("g").remove();
        const width = 500,
            height = 500,
            padding = 5;

        const xScale = d3
            .scaleLinear()
            .domain([-3, 3.2])
            .range([padding, width-padding]);
        const yScale = d3
            .scaleLinear()
            .domain([-3, 3])
            .range([height-padding, padding]);

        // Define the line generator
        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));

        // Generate the data
        const originalData = d3
            .range(-Math.PI, Math.PI, 0.1)
            .map((x) => ({ x: x, y: f(x) }));
        svg1.append("path")
            .datum(originalData)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("d", line);

        // Draw the axes
        const xAxis = d3
            .axisBottom(xScale)
            .tickValues(d3.range(-3, 3, 0.5))
            .tickFormat((d) => (d === 0 ? "0" : d3.format(".1f")(d)));
        const yAxis = d3.axisLeft(yScale).tickValues(d3.range(-3, 3.2, 0.5));
        const xAxisGroup = svg1
            .append("g")
            .attr("transform", `translate(0,${yScale(0)})`)
            .call(xAxis);
        const yAxisGroup = svg1
            .append("g")
            .attr("transform", `translate(${xScale(0)},0)`)
            .call(yAxis);
        xAxisGroup
            .selectAll("text")
            .filter((d) => d === 0)
            .attr("text-anchor", "end")
            .attr("dx", "-.8em");
        yAxisGroup
            .selectAll("text")
            .filter((d) => d === 0)
            .style("display", "none");

        const { a, b } = calculateCoefficients(sliderValue, f);
        const data = d3
            .range(-Math.PI, Math.PI, 0.1)
            .map((x) => ({ x: x, y: generateFourierSeries(a, b, x) }));

        svg1.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line);
    };

    const selectFunction = (key) => {
        selectedFunction = key;
        generatePlot();
    };
    onMount(generatePlot);
    $: steps = [
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
  `,
    ];
</script>

<main>
    <section>
        <!-- scroll container -->
        <div class="section-container">
            <div class="plot-container" id=plot>
                <div class="plot">
                    <input
                        type="range"
                        min="0"
                        max="30"
                        bind:value={sliderValue}
                        on:input={generatePlot}
                    />
                    <div class='buttons'>
                    <ul>
                        {#each Object.keys(functions) as key}
                            <li>
                                <button
                                    class="function-button"
                                    on:click={() => selectFunction(key)}
                                >
                                    {@html katexify(functions[key].latex, true)}
                                </button>
                            </li>
                        {/each}
                    </ul>
                </div>
                    <svg bind:this={svg} width='500' height='500' padding='0'></svg>
                </div>
                
            </div>

            <div class="steps-container">
                <Scrolly bind:scroll_value>
                    {#each steps as text, i}
                        <div class="step" class:active={scroll_value === i}>
                            <div class="step-content">{@html text}</div>
                        </div>
                    {/each}
                    <div class="spacer" />
                </Scrolly>
            </div>
        </div>
    </section>
</main>

<style>
    .function-button {
        top:10px;
        left: 10px;
        background-color: #4caf50; 
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        transition-duration: 0.4s;
        width: 200px; 
        height: 50px; 
        overflow: hidden; 
        top : 10px;
        left: 10px;
    }


    .function-button:hover {
        background-color: white;
        color: black;
        border: 2px solid #4caf50;
    }

    
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        position: relative;
        align-items: left;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .spacer {
        height: 40vh;
    }

    .plot-container {
        position: sticky;
        top: 10%;
        width: 50%;
        height: 80%;
        border: 3px solid black;
    }

    .section-container {
        margin-top: 1em;
        text-align: center;
        transition: background 100ms;
        display: flex;
    }

    .step {
        height: 110vh;
        display: flex;
        place-items: end;
        justify-content: center;
    }

    .step-content {
        font-size: 18px;
        background: var(--bg);
        color: #ccc;
        border-radius: 1px;
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: background 500ms ease;
        text-align: left;
        width: 75%;
        margin-left: 0;
        max-width: 500px;
        font-family: var(--font-main);
        line-height: 1.3;
        border: 5px solid var(--default);
    }

    .step.active .step-content {
        background: #f1f3f3ee;
        color: var(--squid-ink);
    }

    .steps-container {
        height: 100%;
    }

    .steps-container {
        flex: 1 1 40%;
        z-index: 10;
    }
</style>
