Imports System.Web.Optimization
Imports System.Web.Optimization.React
Public Class BundleConfig
    Public Shared Function RegisterBundles(ByVal bundles As BundleCollection)
        'bundles.Add(New BabelBundle("~/bundles/main").Include("~/Scripts/index.jsx"))
        bundles.Add(New BabelBundle("~/bundles/main").IncludeDirectory("~/Scripts", "*.jsx"))

        ' Forces files to be combined And minified in debug mode
        ' Only used here to demonstrate how combination/minification works
        ' Normally you would use unminified versions in debug mode.
        BundleTable.EnableOptimizations = True
    End Function
End Class
