module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: "/blog/",
    themeConfig:{
        nav: [{text: "主页", link: "/"      },
            { text: "foo", link: "/foo/" }
          ],
          sidebar: {
            "/foo/": [
                ["", "Foo Hello"],
                ["one", "One readme"],
                ["two", "Second"]
            ]
          },
      }
  }