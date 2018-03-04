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
            name:="ToogleArgumentCompleted",
            url:="toogle-argument-completed",
            defaults:=New With {.controller = "Todo", .action = "ToogleArgumentCompleted"}
            )

        routes.MapRoute(
            name:="AddArgument",
            url:="add-argument",
            defaults:=New With {.controller = "Todo", .action = "AddArgument"}
            )

        routes.MapRoute(
            name:="AddCategory",
            url:="add-category",
            defaults:=New With {.controller = "Todo", .action = "AddCategory"}
            )

        routes.MapRoute(
            name:="DeleteArgument",
            url:="delete-argument",
            defaults:=New With {.controller = "Todo", .action = "DeleteArgument"}
            )

        routes.MapRoute(
            name:="DeleteCategory",
            url:="delete-category",
            defaults:=New With {.controller = "Todo", .action = "DeleteCategory"}
            )

        routes.MapRoute(
            name:="FetchArgumentsByCategory",
            url:="fetch-arguments-by-category",
            defaults:=New With {.controller = "Todo", .action = "FetchArgumentsByCategory"}
            )

        routes.MapRoute(
            name:="FetchAllCategories",
            url:="fetch-all-categories",
            defaults:=New With {.controller = "Todo", .action = "FetchAllCategories"}
            )

        routes.MapRoute(
            name:="CatchAll",
            url:="{*url}",
            defaults:=New With {.controller = "Todo", .action = "Index", .id = UrlParameter.Optional}
        )

        routes.MapRoute(
            name:="Default",
            url:="{controller}/{action}/{id}",
            defaults:=New With {.controller = "Todo", .action = "Index", .id = UrlParameter.Optional}
        )

    End Sub
End Module