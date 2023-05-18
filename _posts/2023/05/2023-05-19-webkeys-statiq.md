---
title: WebKeys in Statiq.Web
author: Jason Gaylord
date: 2023-05-19
categories: [dev,statiq,tip]
tags: [dev,statiq,tip]
post-number: 1252
image: https://cdn.jasongaylord.com/images/2023/05/11/statiq-web.jpg
bitly: https://jasong.us/42NBDtJ
---

Yesterday I talked about [settings files in Statiq](). One thing I failed to mention is that the Statiq.Web project template contains a static class, called `WebKeys` that acts as a helper, that has an alias for many common setting names. When creating your settings file, you do not have to use any or all of these keys. In fact, I plan on only using a handful and then creating many of my settings.

You can find the latest version of the `WebKeys` settings here:

{% include github-browse.html bitly="jasong.us/3Ilzr4s" repo="statiqdev/Statiq.Web" branch="main" %}

As of this post, Statiq.Web version 1.0 beta version 53, here are the current `WebKeys`:

## Global WebKeys
* **InputFiles** - The globbing pattern(s) used to read input files. The files will be processed by the appropriate pipeline based on their media type and registered Templates. Files that don't match templates for data or content are treated as assets.
* **AdditionalInputFiles** - Additional globbing pattern(s) used to read input files. This lets you define additional input file globbing patterns (or file names) without having to redefine or change the default InputFiles value. The files will be processed by the appropriate pipeline based on their media type and registered Templates. Files that don't match templates for data or content are treated as assets.
* **DirectoryMetadataFiles** - The globbing pattern(s) that will be used to filter directory metadata files. Any files that match the pattern will be further filtered by media types supported by Templates that match ContentType.Data.
* **OptimizeContentFileNames**
* **OptimizeDataFileNames**
* **ApplyDirectoryMetadata** - Set to `false` to prevent processing directory metadata.
* **ProcessSidecarFiles** - Set to `false` to prevent processing sidecar files.
* **GenerateSitemap** - Indicates that a sitemap file should be generated if `true` (the default).
* **IncludeInSitemap** - Set to `false` to exclude a document from the sitemap file.
* **GenerateSearchIndex** - Indicates that a client-side Lunr search index file should be generated if `true` (the default is `false`).
* **SearchScriptPath** - The destination path of the client-side Lunr search file ("search.js" by default).
* **SearchIndexPath** - The destination path of the search index file ("search.index.json" or "search.index.gz" by default).
* **SearchResultsPath** - The destination path of the search results file ("search.results.json" or "search.results.gz" by default).
* **ZipSearchIndexFile** - Indicates whether the search index file should be gzipped (the default is `true`). If this is `true`, the JavaScript library pako must be included on the client to decompress the file.
* **ZipSearchResultsFile** - Indicates whether the search results file should be gzipped (the default is `true`). If this is `true`, the JavaScript library pako must be included on the client to decompress the file.
* **SearchIncludeHost** - If set to `true`, the Keys.Host will be included in the client-side Lunr search index links.
* **AdditionalSearchableFields** - The metadata fields that will be searchable in addition to the default fields of "title", "content", and "tags".
* **AdditionalSearchResultFields** - The metadata fields that will be available in search results in addition to the default fields of "link" and "title".
* **SearchAllowPositionMetadata** - Adds the "position" metadata to the metadata allowlist in the search index, which enables position information for each search term in the search results at the expense of index size. See [https://lunrjs.com/guides/core_concepts.html](https://jasong.us/458DHhp) for more information.
* **SearchStopWords** - Specifies stops words to use for the search index. By default a pre-defined set of English stop words are used.
* **SearchStopWordsFilePath** - Specifies an input file that contains stop words to use. The file should contain one stop word per line.If both this setting and `SearchStopWords` are specified, the defined stop words will be used and the file specified will be ignored.
* **SearchStemming** - Turns on stemming for client-side search. By default an English stemmer is used (you must define your own `GenerateLunrIndex` module to specify alternate stemming behavior). Turning on stemming also results in the generated client search JavaScript file no longer supporting typeahead searches by default since stemming and wildcard searching don't work well together.
* **MirrorResources**
* **MetaRefreshRedirects** - Generates META-REFRESH redirect pages (the default value is `true`).
* **NetlifyRedirects** - Generates a Netlify redirects file (or adds to an existing one) for any `Keys.RedirectFrom` and/or `Keys.RedirectTo` metadata. Also ensures a Netlify-style `_redirects` file is not excluded if one exists in the input folder.
* **NetlifyPrefixRedirects** - Generates redirects in a Netlify redirects file for any file or folder that starts with the prefix specified in `NetlifyRedirectPrefix` (`^` by default) to the same name without them. The default value is `true` so set this to `false` to prevent this behavior. This is useful when you need to output and upload a file or folder with a different name than what you want Netlify to serve. In particular, it's required to support uploading files or folders that start with a dot to Netlify since Netlify doesn't support uploading those artifacts normally ([click here](https://jasong.us/3My1LTz)). This setting has no effect if `NetlifyRedirects` is `false`.
* **NetlifyRedirectPrefix** - Sets the prefix used when `NetlifyPrefixRedirects` is `true` (`^` by default). This prefix is checked after document destinations have been set and file name optimization has been performed (I.e. if `OptimizeContentFileNames` and/or `OptimizeDataFileNames` is `true`) so the prefix should be specified without those optimizations in mind (I.e. it should generally not use characters in `NormalizedPath.OptimizeFileNameReservedChars` unless alternate optimization settings have been specified).
* **ThemePaths** - Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperThemeExtensions` to change theme paths.
* **InputPaths** - Input directory paths specified as settings. Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperFileSystemExtensions` to change file system paths.
* **OutputPath** - Output directory path specified as a setting. Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperFileSystemExtensions` to change file system paths.
* **TempPath** - Temp directory path specified as a setting. Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperFileSystemExtensions` to change file system paths.
* **CachePath** - Cache directory path specified as a setting. Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperFileSystemExtensions` to change file system paths.
* **ExcludedPaths** - Excluded directory paths specified as a setting. Note that paths are processed before the normal extensions in `BootstrapperSettingsExtensions` so you must use the `Initial...()` settings extensions, a setting file, or the extensions in `BootstrapperFileSystemExtensions` to change file system paths.
* **WatchPaths** - Additional paths to watch in preview mode (input paths are always watched).
* **GatherHeadingsLevel** - The level at which to gather headings for a document (this can be set globally or per-document).
* **MakeLinksAbsolute** - Converts relative links to absolute links.
* **MakeLinksRootRelative** - Converts relative links to root-relative links.
* **MinimumStatiqWebVersion** - Sets a semantic version range of Statiq Web that must be used. Particularly useful for themes to set a supported version range.
* **HighlightCode** - Indicates that generation-time code highlighting should be performed using the highlight.js library (the highlight.js CSS files still need to be included in the site).
* **HighlightUnspecifiedLanguage** - Indicates that unspecified languages should be code highlighted. Highlighting unspecified languages is much more tim consuming, so turning this off may improve generation times if a large number of unspecified code blocks are present. No effect if `HighlightCode` is `false`. The default is `true`.
* **FrontMatterRegexes** - The regular expressions used to identify front matter. Change this setting if you want to define entirely new front matter expressions. Otherwise, set `AdditionalFrontMatterRegexes` if you want to keep the defaults and only want to add new patterns.
* **AdditionalFrontMatterRegexes** - Additional regular expressions used to identify front matter.
* **XrefPipelines** - The name(s) of pipelines to use for xref lookups (defaults to "content", "archives", "assets", "data", "feeds"). Change this setting if you want to define entirely new xref pipelines. Otherwise, set `AdditionalXrefPipelines` if you want to keep the defaults and only want to add new pipelines.
* **AdditionalXrefPipelines** - The name(s) of additional pipelines to use for xref lookups (defaults to "content", "archives", "assets", "data", "feeds", and "api").
* **IgnoreInvalidXrefs** - Normally invalid xref targets result in an error. Set this to `true` to output a warning instead and continue execution.


## Document WebKeys
* **ContentType** - Indicates the type of content and thus which pipeline will process the file. This will be automatically set based on the media type of the file and other metadata, but it can be further adjusted by setting manually. For example, if you have a ".cshtml" file but you want to copy it to the output folder instead of processing as a Razor file, set the `ContentType` to `ContentType.Asset`.
* **MediaType** - Changes the media type of the document (normally this is interpreted from the file extension). For example, to force script evaluation for a file that isn't ".cs" or ".csx", set the `MediaType` front matter to `MediaTypes.CSharp`.
* **Script** - Set to `true` to indicate that the content contains a script that should be evaluated before processing normally.
* **RemoveScriptExtension** - Indicates that if a script file has a second extension such as "foo.md.csx" that the script extension should be removed and the preceding extension should be used to reset the media type after script evaluation, and thus the templates that will be executed (the default is `true`).
* **Title** - The title of the document, often used by themes.
* **Description** - The description of the document, often used by themes.
* **Author** - The author of the site, post, or page (can be set at any level).
* **Image**
* **Copyright**
* **Published** - The date the file or post was published. If you want to use a different metadata key to represent published dates you can globally fetch a value from a different key by setting `Published` in settings to an evaluated metadata script like `=> SomeOtherKey`. The pipelines will ensure that the `Published` value is always set by either reading from an existing value or by attempting to determine a published date using the file name or (optionally) the file last modified time.
* **PublishedUsesLastModifiedDate**
* **Updated**
* **Excluded** - Indicates the document should be excluded from pipeline processing if `true`. The default value looks at `Published` and filters out any future-dated content or data, though you can also define a value for this setting directly for each document.
* **ShouldOutput** - Indicates that the file should be output. By default content and asset files are output and data files are not.
* **ClearDataContent** - Set this to `true` to clear the content of data files after processing (the default is `false`).
* **Layout** - Indicates the layout file that should be used for this document (used by the Razor template engine).
* **Xref** - Specifies the cross-reference ID of the current document. If not explicitly provided, it will default to the title of the document with spaces replaced by underscores (which is derived from the source file name if no `Title` metadata is defined for the document).
* **Recursive** - Used with directory metadata to indicate if the metadata should be applied recursively to files in child directories (the default is `true`).
* **RenderPostProcessTemplates** - Indicates that post-process templates should be rendered (the default is `true`). Set this to `false` for a document to prevent rendering post-process templates such as Razor. This can be helpful when you have small bits of content like Markdown that you want to render as HTML but not as an entire page so that it can be included in other pages.


## Archive WebKeys
* **ArchivePipelines** - The pipeline(s) to get documents for the archive from. Defaults to the `Content` pipeline if not defined.
* **ArchiveSources** - A globbing pattern to filter documents from the archive pipeline(s) based on source path (or all documents from the pipeline(s) if not defined).
* **ArchiveFilter** - An additional metadata filter for documents from the archive pipeline(s) that should return a `bool`.
* **ArchiveKey** - The key to use for generating archive groups. The source documents will be grouped by the key value(s). This can either be the name of a metadata key to use or a computed value that will get archive key values. If this is not defined, only a single archive index with the source documents will be generated.
* **ArchiveKeyComparer** - An `IEqualityComparer<object>` to use for comparing archive groups. A scripted metadata value can be used to return the appropriate comparer and the `IEqualityComparerExtensions.ToConvertingEqualityComparer{T}(IEqualityComparer{T})` extension method can be used to convert a typed comparer into a `IEqualityComparer<object>`. For example, to ignore case when generating an archive for tags, you can use `ArchiveKeyComparer: => StringComparer.OrdinalIgnoreCase.ToConvertingEqualityComparer()`.
* **ArchivePageSize** - The number of items on each group page (or all group items if not defined). The current page index is stored in the `Index` metadata value.
* **ArchiveTitle** - The title of each group output document. This is usually a computed value (starting with a `=>`) that calculates the title based on the group key. If this value is not specified, the default title will be "[Archive Title] - [Group Key] (Page [Index (If Paged)])".
* **ArchiveDestination** - The destination path of each group output document. This is usually a computed value (starting with a `=>`) that calculates the destination based on the group key. If this value is not specified, the default group destination will be "[Archive File Path]/[Archive File Name]/[Group Key]/[Index (If Paged)].html". The destination path of the archive index follows normal  destination calculation and will be placed at the same relative path as the archive file or can be changed with metadata like `DestinationPath`.
* **ArchiveOrderKey** - A metadata key that contains the value that sorting should be based on. If both `ArchiveOrder` and `ArchiveOrderKey` are specified, `ArchiveOrderKey` will be applied first followed by `ArchiveOrder`.
* **ArchiveOrder** - A value that sorting should be based on (I.e. using a computed value). If both `ArchiveOrder` and `ArchiveOrderKey` are specified, `ArchiveOrderKey` will be applied first followed by `ArchiveOrder`.
* **ArchiveOrderDescending** - Indicates the archive should be sorted in descending order.


## Feed WebKeys
* **FeedPipelines**
* **FeedSources**
* **FeedFilter**
* **FeedOrderKey** - The key that should be sorted
* **FeedOrderDescending** - Indicates the archive should be sorted in descending order
* **FeedSize** - The number of items the feed should contain after sorting
* **FeedRss**
* **FeedAtom**
* **FeedRdf**
* **FeedId** - A Uri, links to the root of the site by default
* **FeedTitle** - Defaults to `WebKeys.Title`
* **FeedDescription** - Defaults to `WebKeys.Description`
* **FeedAuthor** - Defaults to `WebKeys.Author`
* **FeedPublished**
* **FeedUpdated** 
* **FeedLink** - Uri
* **FeedImageLink** - Uri
* **FeedItemId**
* **FeedItemTitle**
* **FeedItemDescription**
* **FeedItemAuthor**
* **FeedItemPublished**
* **FeedItemUpdated**
* **FeedItemLink**
* **FeedItemImageLink**
* **FeedItemContent**
* **FeedItemThreadLink**
* **FeedItemThreadCount**
* **FeedItemThreadUpdated**


## Deployment WebKeys
* **GitHubOwner**
* **GitHubName**
* **GitHubUsername**
* **GitHubPassword**
* **GitHubToken**
* **GitHubBranch**
* **NetlifySiteId**
* **NetlifyAccessToken**
* **AzureAppServiceSiteName**
* **AzureAppServiceUsername**
* **AzureAppServicePassword**