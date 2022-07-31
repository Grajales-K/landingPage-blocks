var slider, pic;


slider = ['//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgcdn.emol.cl%2Finternet%2Ffiles%2F2015%2F06%2Frl8vzy74mz9drpztjyyw.png&amp;f=1&amp;nofb=1', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhITrNseUQ7NBEyo0syBvFJcQUMOEnC0JbmT_TAJ8Avlk_hf3MtIIKqmQySzP-xOSAKEf6JJjqttrC6f7T1stiQ82sk-zCLXm8Lm_MZTjACDR-4BIUjDV9BQjlWzxDJfmCblcI4uvw13Hb4QKWnBRh9m_teTGARiidHtHqDnOlJZO1khAro25bpbwnf/s2016/img3.jpeg', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha2Q4783fyB3xsHt_k3GxhkpI7P17l92fXJgCOmIzsqcC7TKA6tG1jqXaqWG9_V-opRUTmWvJl7pY3fiP3rtNkosUOylRI9gqgib8uQ9O87-3EHzNEETCe7rmlIBPcoZN6b_o1r4Yds50asukBwysE1oFRFcY9iXHbitdbXSvSXsqfr0W0-1QEeooS/s2016/img1.jpeg', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7oPgJnir94v5KtHQWA6sprehdblK6WAyZoIPgq0rYAIoBQTgZVUZcnuWqLJzv6tpfaP00ReolcJmdHBgFPyamKT5n8ou7Sk1kjoSe9mNxPn6lpqfaIDxTKeWjKZCp7XGAlwDxkIPcbPualHt-3mXMauPUyIoVWD1RTaxhTWrCu0qJS7wefbqdBuBH/s2016/img4.jp', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha2Q4783fyB3xsHt_k3GxhkpI7P17l92fXJgCOmIzsqcC7TKA6tG1jqXaqWG9_V-opRUTmWvJl7pY3fiP3rtNkosUOylRI9gqgib8uQ9O87-3EHzNEETCe7rmlIBPcoZN6b_o1r4Yds50asukBwysE1oFRFcY9iXHbitdbXSvSXsqfr0W0-1QEeooS/s2016/img1.jpeg'];
let element_pic = document.getElementById('pic');
element_pic.setAttribute("src", slider[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  if (pic != 0) {
    element_pic2.innerText = slider;
    slider.push(slider.shift());
    element_pic2.setAttribute("src", slider[0]);
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_pic3 = document.getElementById('pic');
  if (pic != 0) {
    element_pic3.setAttribute("src", slider.slice(-1)[0]);
    slider.unshift(slider.pop());
  }

});