'------------------------------------------------------------------------------
' <auto-generated>
'     Il codice è stato generato da uno strumento.
'     Versione runtime:4.0.30319.42000
'
'     Le modifiche apportate a questo file possono provocare un comportamento non corretto e andranno perse se
'     il codice viene rigenerato.
' </auto-generated>
'------------------------------------------------------------------------------

Option Strict On
Option Explicit On

Imports System

Namespace Resources
    
    'Questa classe è stata generata automaticamente dalla classe StronglyTypedResourceBuilder
    'tramite uno strumento quale ResGen o Visual Studio.
    'Per aggiungere o rimuovere un membro, modificare il file con estensione ResX, quindi eseguire nuovamente ResGen
    'con l'opzione /str oppure ricompilare il progetto Visual Studio.
    '''<summary>
    '''  Classe di risorse fortemente tipizzata per la ricerca di stringhe localizzate e così via.
    '''</summary>
    <Global.System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Web.Application.StronglyTypedResourceProxyBuilder", "15.0.0.0"),  _
     Global.System.Diagnostics.DebuggerNonUserCodeAttribute(),  _
     Global.System.Runtime.CompilerServices.CompilerGeneratedAttribute()>  _
    Friend Class Labels
        
        Private Shared resourceMan As Global.System.Resources.ResourceManager
        
        Private Shared resourceCulture As Global.System.Globalization.CultureInfo
        
        <Global.System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")>  _
        Friend Sub New()
            MyBase.New
        End Sub
        
        '''<summary>
        '''  Restituisce l'istanza di ResourceManager memorizzata nella cache da questa classe.
        '''</summary>
        <Global.System.ComponentModel.EditorBrowsableAttribute(Global.System.ComponentModel.EditorBrowsableState.Advanced)>  _
        Friend Shared ReadOnly Property ResourceManager() As Global.System.Resources.ResourceManager
            Get
                If Object.ReferenceEquals(resourceMan, Nothing) Then
                    Dim temp As Global.System.Resources.ResourceManager = New Global.System.Resources.ResourceManager("Resources.Labels", Global.System.Reflection.[Assembly].Load("App_GlobalResources"))
                    resourceMan = temp
                End If
                Return resourceMan
            End Get
        End Property
        
        '''<summary>
        '''  Esegue l'override della proprietà CurrentUICulture del thread corrente per tutte
        '''  le ricerche di risorse eseguite con questa classe di risorse fortemente tipizzata.
        '''</summary>
        <Global.System.ComponentModel.EditorBrowsableAttribute(Global.System.ComponentModel.EditorBrowsableState.Advanced)>  _
        Friend Shared Property Culture() As Global.System.Globalization.CultureInfo
            Get
                Return resourceCulture
            End Get
            Set
                resourceCulture = value
            End Set
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a No category selected.
        '''</summary>
        Friend Shared ReadOnly Property msgCategoryIdRequired() As String
            Get
                Return ResourceManager.GetString("msgCategoryIdRequired", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Insert category name.
        '''</summary>
        Friend Shared ReadOnly Property msgCategoryNameRequired() As String
            Get
                Return ResourceManager.GetString("msgCategoryNameRequired", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Error while deleting object.
        '''</summary>
        Friend Shared ReadOnly Property msgErrorDelete() As String
            Get
                Return ResourceManager.GetString("msgErrorDelete", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Error while reading data.
        '''</summary>
        Friend Shared ReadOnly Property msgErrorRead() As String
            Get
                Return ResourceManager.GetString("msgErrorRead", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Error while saving object.
        '''</summary>
        Friend Shared ReadOnly Property msgErrorSave() As String
            Get
                Return ResourceManager.GetString("msgErrorSave", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Select a category.
        '''</summary>
        Friend Shared ReadOnly Property msgSelectCategory() As String
            Get
                Return ResourceManager.GetString("msgSelectCategory", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a No todo arugment selected.
        '''</summary>
        Friend Shared ReadOnly Property msgTodoArgumentIdRequired() As String
            Get
                Return ResourceManager.GetString("msgTodoArgumentIdRequired", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Insert todo argument title.
        '''</summary>
        Friend Shared ReadOnly Property msgTodoArgumentTitleRequired() As String
            Get
                Return ResourceManager.GetString("msgTodoArgumentTitleRequired", resourceCulture)
            End Get
        End Property
        
        '''<summary>
        '''  Cerca una stringa localizzata simile a Insert todo argument complete date.
        '''</summary>
        Friend Shared ReadOnly Property msgTodoWithinDateRequired() As String
            Get
                Return ResourceManager.GetString("msgTodoWithinDateRequired", resourceCulture)
            End Get
        End Property
    End Class
End Namespace
