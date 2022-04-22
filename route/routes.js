app.use((req,res)=>{
    console.log('new request amde:')
    console.log('host', req.hostname)
    console.log('path',req.path)
    console.log('method',req.method)
    next();
})




app.use(morgan('dev'))



app.get('/about',(req,res)=>{
    Blog.find()
        .then((result)=>[
            res.render('index',{title:'all blogs', blog: result})
        ])
        .catch(err=>{
            console.log(err)
        })
})
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog',
        snippet:'about my new blog',
        body:'more about my blog'
    })
    blog.save()
        .then(result=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})


app.post('/blog',(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
        .then(res=>[
            res.redirect('/blogs')
        ])
        .catch((err)=>[
            console.log(err)
        ])
})




  app.get('/blogs/:id',(req,res)=>{
      const id=req.params.id
      Blog.findById(id)
      .then(res=>[
        render('details',{blog:'result', title:'blog-title'})
    ])
    .catch((err)=>[
        console.log(err)
    ])
  })



app.get('/all-blogs',(res,req)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})



app.get('/single-blog',(res,req)=>{
    Blog.findById('5eb415667fcf2d6448fc162a')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})




app.get('/',(req,res)=>{
    const blogs=[
        {title: 'yoshi finds eggs', snippets: 'lorem ipsum dolor sit amet'}
        {title: 'mmario finds star', snippets: 'lorem dolor sit amet'}
        {title: 'how to defeat bowsar', snippets: 'lorem ipsum dolor sit amet'}
       
    ];
    res.render('index',{title : 'home',blogs});
})




app.use((req,res,next)=>{
    console.log('in the middleWare');
    next();
})

app.delete('/blog/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findByIdDelete(id)
        .then(result=>{
            res.json({
                redirect:'/blogs'
            })
        })
})





app.get('/' , (req,res)=>{
    req.send('<p> home page</p>');
    res.sendFile('./views/index.html', {root:__dirname});
})
app.get('/about' , (req,res)=>{
    req.send('<p> about page</p>');
    res.sendFile('./views/about.html', {root:__dirname});
})
app.get('/about',(req,res)=>{
    req.redirect('/about')
})
app.use((req,res)=>{
    res.sendFile('./views/404.html', {root:__dirname});
})
app.get('/about' , (req,res)=>{
    res.sendFile('./views/about.html', {root:__dirname});
})