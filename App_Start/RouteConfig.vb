Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.Mvc
Imports System.Web.Routing

Public Module RouteConfig
    Public Sub RegisterRoutes(ByVal routes As RouteCollection)
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}")

        routes.MapRoute(
            name:="AggiungiArgomento",
            url:="aggiungi-argomento",
            defaults:=New With {.controller = "Todo", .action = "AggiungiArgomento"}
            )

        routes.MapRoute(
            name:="AggiungiCategoria",
            url:="aggiungi-categoria",
            defaults:=New With {.controller = "Todo", .action = "AggiungiCategoria"}
            )

        routes.MapRoute(
            name:="CancellaCategoria",
            url:="cancella-categoria",
            defaults:=New With {.controller = "Todo", .action = "CancellaCategoria"}
            )

        routes.MapRoute(
            name:="ArgomentiByCategoria",
            url:="argomenti-by-categoria",
            defaults:=New With {.controller = "Todo", .action = "GetArgomentiByCategoria"}
            )

        routes.MapRoute(
            name:="Categorie",
            url:="categorie",
            defaults:=New With {.controller = "Todo", .action = "GetAllCategorie"}
            )

        routes.MapRoute(
            name:="Default",
            url:="{controller}/{action}/{id}",
            defaults:=New With {.controller = "Todo", .action = "Index", .id = UrlParameter.Optional}
        )

        'defaults:=New With {.controller = "Home", .action = "Index", .id = UrlParameter.Optional}
    End Sub
End Module