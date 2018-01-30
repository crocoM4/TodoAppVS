Imports System.Web.Helpers
Imports System.Web.Mvc

<AttributeUsage(AttributeTargets.Method Or AttributeTargets.Class, AllowMultiple:=False, Inherited:=True)>
Public Class ValidateJsonAntiForgeryTokenAttribute
    Inherits FilterAttribute
    Implements IAuthorizationFilter


    Private Sub IAuthorizationFilter_OnAuthorization(filterContext As AuthorizationContext) Implements IAuthorizationFilter.OnAuthorization
        If (filterContext Is Nothing) Then
            Throw New ArgumentNullException("filterContext")
        End If

        Dim httpContext = filterContext.HttpContext
        Dim coockie = httpContext.Request.Cookies.Get(AntiForgeryConfig.CookieName)
        If coockie IsNot Nothing Then
            AntiForgery.Validate(coockie.Value, httpContext.Request.Headers.Get("__RequestVerificationToken"))
        End If
    End Sub
End Class
