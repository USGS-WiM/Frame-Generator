# Archived

### This repo has been archived. 

The app has been intergrated into the WIM Styleguide Repo at [github.com/usgs-wim/styleguide](https://github.com/USGS-WiM/Styleguide). The frame generator code specifically is located in the [/src/views/tools/Frame.vue](https://github.com/USGS-WiM/Styleguide/blob/staging/src/views/tools/Frame.vue) and [/src/views/tools/FrameView.vue](https://github.com/USGS-WiM/Styleguide/blob/staging/src/views/tools/FrameView.vue) files.
___________________

<!-- ![WiM](wimlogo.png) -->
___________________

# Frame Templates Generator

This project takes a URL (Storymap, Experience, Tableau, other) and other information and generates a single index.html file with government headers and footers, with the URL in an iFrame in between, giving you a website compliant with the USGS Visual identity guidelines for websites. 

Also includes templates for Geoplatform and National Park Service.

### Prerequisites

Vue CLI
```bash
npm install -g @vue/cli
```

## Getting Started

### Installing

```bash
npm install
```

## Building and testing

#### Serve on [localhost:8080](https://localhost:8080)
```bash
npm run serve
```
Bundle Analyzer will also be running at :8888

#### Build
```bash
npm run build
```

## Other Commands

### Run your tests
```bash
npm run test
```
### Lints and fixes files
```bash
npm run lint
```

## Built With

* [Vue](https://vuejs.org)
* [USWDS](https://designsystem.digital.gov/)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests to us. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on adhering by the [USGS Code of Scientific Conduct](https://www2.usgs.gov/fsp/fsp_code_of_scientific_conduct.asp).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](../../tags). 

Advance the version when adding features, fixing bugs or making minor enhancement. Follow semver principles. To add tag in git, type git tag v{major}.{minor}.{patch}. Example: git tag v2.0.5

To push tags to remote origin: `git push origin --tags`

*Note that your alias for the remote origin may differ.

## Authors

* **[Mitch Samuels](https://github.com/mitchas)**  - *Lead Developer* - [USGS Web Informatics & Mapping](https://wim.usgs.gov/)
* **[Jamie Velkoverh](mailto:JVELKOVERH@USGS.GOV)** - *Geonarrative Coordinator* -  [USGS Web Informatics & Mapping](https://wim.usgs.gov/)

See also the list of [contributors](../../graphs/contributors) who participated in this project.

## License

This project is licensed under the Creative Commons CC0 1.0 Universal License - see the [LICENSE.md](LICENSE.md) file for details

## Suggested Citation
In the spirit of open source, please cite any re-use of the source code stored in this repository. Below is the suggested citation:

`This project contains code produced by the Web Informatics and Mapping (WIM) team at the United States Geological Survey (USGS). As a work of the United States Government, this project is in the public domain within the United States. https://wim.usgs.gov`

## About WIM
* This project authored by the [USGS WIM team](https://wim.usgs.gov)
* WIM is a team of developers and technologists who build and manage tools, software, web services, and databases to support USGS science and other federal government cooperators.
* WIM is a part of the [Upper Midwest Water Science Center](https://www.usgs.gov/centers/wisconsin-water-science-center).