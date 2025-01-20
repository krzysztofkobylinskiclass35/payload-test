
# Readme

## Links:

- [Figma](https://www.figma.com/design/AkZZNjGQHNdcKUqpCxb4T7/payretailers.dev---Website?node-id=13-6726&p=f&t=r0fc7icMzNEGD393-0)
- [Miro](https://miro.com/app/board/uXjVLFuaXsM=/)
- [Dev Mongo Db](https://cloud.mongodb.com/v2/6526632ab7de63292926698f#/metrics/replicaSet/678a1adefc57e55a369ab9b8/explorer/test/pages/find)
- [Repo](https://github.com/krzysztofkobylinskiclass35/payload-test)

## PayRetailers DevPortal Structure

  - **Landing page for "developer portal" <- Current focus**
    - mostly focused on marketing of Payretailers tech
  - API docs
    - done using external tool (Readme)[https://readme.com/]
  - "Dev Sandbox"
    - custom app with auth,
    - playground for devs to learn how to use Payretailers APIs
    - to be developed soon

## Biz requirements / Objectives

- Landing page (multiple pretty similar sub-pages)
- Support multiple Languages (EN, ES, PT, ?)
- websites updated in X month intervals
- Ability to clone and create new page with new styles easly

## Tech Requirements / Tech in use

- Reactjs / Nextjs
- Hosted on Azure VMs
- Docker Containers
- observability! Grafana, elastic search for logs
- bitbucket for CICD
- gitflow
- no CMS
- Wordpress

# Tech Proposition

- Not using Webflow, or Wordpress
- Following your tech stack -
  - React / Nextjs / Tailwind -> Static prerendered websites
  - Dockerized
- Payload CMS
  - standalone AiO
  - Open source, very popular, codebase fully owned (!webflow)
  - Fastest, fully optimized for React and NextJS
  - Easy to extend to full sandbox app & maintenance (its react app, dev sandbox can be in same codebase)
  - multi language support out of the box
  - ability to Adding/create plugins like: contact forms → AI agent bot

# Demo

- How Payload works/is set up
- Initial Look
- Creating new page
- How blocks work
