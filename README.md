# React Starter Data Studio Community Visualization

This component is designed to be used as a starting point for building Data Studio visualizations using the React framework. The included React component, `<MyTable />`, dynamically renders headers and rows from Data Studio column names and values.

## Notes

### Context API

This example uses the [React Context API](https://reactjs.org/docs/context.html) to make data from Data Studio (field names, values, styling, theme) easily accessible to nested components without prop drilling. While not required, it can add efficiency to a larger project with multiple components requiring access to theme/styling values, etc.

### Styling

CSS is built using the [Emotion](https://emotion.sh/docs/introduction) library, which is compatible with multiple formats (template strings, objects, etc.), including styled components.

## Deployed version

Manifest path of the deployed version of this visualization:

```
gs://anvil-data-studio-react-starter
```

Component ID:

```
react
```

## Authors

This component was built by [Anvil Analytics + Insights](https://anvilinsights.com)
