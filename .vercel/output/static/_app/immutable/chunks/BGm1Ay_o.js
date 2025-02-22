const s="whisky-exchange-ds-1",n="Some Simple Data Science with Whisky Exchange Data",o="2025-02-01",a=`
<h2>Welcome to My First Post</h2>
<p>This is just a quick example of storing a blog post as TypeScript.</p>
<p>We can include <strong>HTML</strong> or inline styles if we want.</p>
`,i=Object.freeze(Object.defineProperty({__proto__:null,content:a,date:o,slug:s,title:n},Symbol.toStringTag,{value:"Module"})),c=Object.assign({"./my-first-post.ts":i}),l=Object.values(c).map(t=>({slug:t.slug,title:t.title,date:t.date,content:t.content}));l.sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime());export{l as a};
