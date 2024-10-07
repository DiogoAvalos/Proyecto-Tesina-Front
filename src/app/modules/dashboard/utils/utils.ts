export function descargarChartImage(chart, fileName: string) {
    chart.dataURI().then((uri) => {
      const link = document.createElement("a")
      if ('imgURI' in uri) {
        link.href = uri.imgURI;
      } else if ('blob' in uri) {
        const url = URL.createObjectURL(uri)
        link.href = url;
        URL.revokeObjectURL(url)
      }
      
      link.download = fileName
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link)
    });
}
