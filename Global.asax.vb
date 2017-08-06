Imports System.Web.Mvc
Imports System.Web.Routing
Imports System.Web.Optimization
Imports Parse

Public Class MvcApplication
    Inherits System.Web.HttpApplication

    Protected Sub Application_Start()
        AreaRegistration.RegisterAllAreas()
        RouteConfig.RegisterRoutes(RouteTable.Routes)
        'Aggiunto per bundle
        'BundleConfig.RegisterBundles(BundleTable.Bundles)

        Dim config = New ParseClient.Configuration()
        config.ApplicationId = "v896epsbTyIj6tW4nxNL48k0smm4rK6ouO6TVQEe"
        config.Server = "https://parseapi.back4app.com/"
        config.WindowsKey = "D9xLI6MVcrDduSD7ysJx8DmI8DmYB1dQu1MFGH3v"

        ParseClient.Initialize(config)
    End Sub
End Class
