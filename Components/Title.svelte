<script>
    import katexify from "../katexify";
    const def = `f(x) \\sim \\sum_{n=-\\infty}^\\infty \\hat{f}(n) e^{inx}`;


</script>
<section id='intro'>
    <h1> Fourier Series and Fourier Transform</h1>
    <p> Fourier series and Fourier transform are mathematical tools that are used to analyze and synthesize functions. They are widely used in signal processing, 
        image processing, and many other fields. Fourier series uses linear combinations of sines and cosines to approximate a function. 
    </p>
    <p> 
        The Fourier series of a function {@html katexify('f(x)')} is given by: 
    </p>
    <p>
        {@html katexify(def,true)}
        Where {@html katexify('\\hat{f}(n)')} is the {@html katexify('n^{th}')} Fourier coefficient of the function {@html katexify('f(x)')}.
    </p>
   
</section>
<style>
    #intro {
        background-color: #f9f9f9;
        padding: 20px;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #intro h1 {
        color: #333;
        font-size: 2em;
        margin-bottom: 10px;
    }

    #intro p {
        color: #666;
        line-height: 1.6;
    }
</style>