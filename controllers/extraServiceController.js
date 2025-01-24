let extraServices = [
  { 
    id: '1',
    icon: 'faSwatchbook',
    title: 'Customer portal',
    url: 'https://www.example.com',
    target: '_blank'
  },
  { 
    id: '2',
    icon: 'faEnvelopeOpenText',
    title: 'Your tickets',
    url: 'https://www.example.com',
    target: '_blank'
  },
  { 
    id: '3',
    icon: 'faAddressBook',
    title: 'Teamsystem contacts',
    url: 'https://www.example.com',
    target: '_blank'
  },
  { 
    id: '4',
    icon: 'faCertificate',
    title: 'Premium services',
    url: 'https://www.example.com',
    target: '_blank'
  },
  { 
    id: '5',
    icon: 'faCertificate',
    title: 'Test',
    url: 'app3010://',
    target: '_self'
  }
];

// @desc   Get all posts
// @route  GET /api/posts
export const getExtraServices = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(extraServices.slice(0, limit));
  }

  res.status(200).json(extraServices);
};

// @desc    Get single post
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
};

// @desc    Create new post
// @route   POST /api/posts
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc    Update post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
