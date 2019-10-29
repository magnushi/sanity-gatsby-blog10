export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db8a210db4e87019e20ff2b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog10-studio',
                  apiId: '7a965725-465e-41b1-bf69-0891b3ee445e'
                },
                {
                  buildHookId: '5db8a2103e70f19e97ebce42',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog10',
                  apiId: '4903bd9a-150c-4aa2-aa85-40a7cea6cea4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog10',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog10.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
