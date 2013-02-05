# Title with ligatures set in Garamond Premier Pro Display

This is the abstract, or the lead paragraph (sometimes referred to as simply the first paragraph).  It can be styled h1 + p, or using the first-child pseudo selector (p:first-child).  It has a drop cap (use p:first-letter), uses small-caps for the first line (p:first-line) and is set slightly larger than the normal body copy.

This paragraph should be styled using p + p, which refers to any paragraph that directly follows another paragraph.  These paragraphs have a text-indent, probably of 2ems or close to 2em.

Each paragraph contains a slight margin-bottom and is justified so that both left and right are form vertical lines.  A ragged-right would probably work but setting the text as a block is more in-keeping with the old book style.  

Paragraphs are set with _Garamond Premier Pro_, a font from [Adobe](www.adobe.com) by __Robert Slimbach__.  The title uses _Garamond Premier Pro Display_, which has ligatures. 

## Setting the titles

The main title for the post, h1, is set really large and wider than the content body. It has ligatures, as does the h2.

h2's are set center-aligned and in italic with padding left and right for a sub-title with line-breaks (the padding keeps the sub-title looking centred).  Each sub-title has a margin-top to separate it from the copy above.  Paragraphs below h2 have a margin-top (using h2 + p) to keep the titles sat on the shoulders of the copy.

h3's are set in small-caps with a slightly heavier font weight than the titles and copy (h3 uses 500 - _medium_ - while titles and copy use 400 - _book_).

h3's that are directly beneath an h2, set similar to a sub-title (although they are a sub-title or a sub-title) but use small-caps.  Use h2 + h3 to sort out centre aligning, book font weight and the margins to sort out the spacing.

* * *

The above is an hr.  There should be a different hr at the bottom, probably set using hr:last-child.  The main copy horizontal dividers use 3 asterisks, whereas the bottom divider uses a section glyph flanked by en dashes — § — (— is alt-shift-hyphen).

## Some more typographical elements

### This is an h2 + h3

Code blocks are quite important to a lot of what I will write.  They can be created using ` to block around a code section.  Code can be placed `inline` like this or can be placed in a block.

	§ git push
	This is a block of code.  It should actually be 2 div's, the outside one should contain _overflow:auto_ to make sure that longer code lines can be read – the content should be contained in the inner div
	Incidentally, the \<em\> inside this code block should probably be ignored in normal markdown
	There is no need to escape characters inside code, writing <em> is fine.
  Code blocks are wrapped in pre tags.

Code blocks are inverted, with a dark background and a light font colour.  The background reaches the edges of the content block whilst the actual content is inset to the same amount as the text-indent on paragraphs.

### Lists

* This is a list item
* This is another list item
* Lists are pretty important
* Lists should be hung to preserve the left edge of the copy content

### Blockquotes

Quotes are always useful.  These block-quotes will be set in _Garamond Premier Pro Caption_ and are slightly larger than the standard copy size and set in italic.

> This is a block-quote, it could just be a simple inset quote like this one.

Or, it could be:

> A block-quote like this one also has an author tag associated with it.

The Author

It is likely that the author paragraph would have to have a class specifically associated with it.  p.blockquote + p would work for the paragraph directly proceeding a block quote but it would then force that next paragraph to form the author, when it could be just another paragraph following a quote.

There is also the issue of how to write it in markdown, so that the author is still contained within the block quote.

Blockquotes have a light background and may need to be set slightly darker, although their separation from the main copy should be the italic, larger size, background and indent (again, the indent should match the text-indent).

p.blockquote:before should be used with content:'‘' and p.blockquote:after should use content:'’' so that you get nice _69_ quotes around the quote.  The before quote (or double “) is created using alt-[ or alt-shift-[ (or alt-] and alt-shift-]).  The quotation marks on the keyboard are actually primes for use with measurements.  The quotation marks should be hung - the main copy of block quotes should be lined up with the indent for the paragraph first line indent with the quotation marks set hung before it.

Don't use p.blockquote, AI writer exports \<blockquote\> tags so  use those.

### Images

I'm not really sure how the images will be set at the moment.  I'd like to have a large image stretching across the screen somehow at the top of the page but this would probably conflict with the h1 (which fulfils this job).  It is likely that I'd have a different template for a ‘header’ image that changes the h1.

Images during the post could then either be the width of the content copy (usually 640px) or possibly slightly wider.

### Links

Links should have a dotted underline but not using `text-decoration:underline`, instead use a little padding and a border-bottom which is dotted.  The link should be slightly darker and have a slight left and right padding (matching the inline code) and on hover had a light background.

Links should probably have a quick transition has well so that the background colour ‘fades’ in.

External links could also have a symbol that follows the link to denote that it is a link to an external site.  It isn't often seen on the internet but could be a nice feature.  Use `a[href^='http']` for styling which searches the front of the `href` string http so it'll pick up http and https links to external sites and internal links should use relative paths to differentiate themselves.

* * *

## Markdown

	⁃	Try hitting alt-tab in AI Writer, it indents the paragraph somehow but what exactly does it denote?  This paragraph has it.  _it denotes a code block with a hyphen inserted at the front_

What does AI writer export (in HTML) when you use HTML tags to <span style='color:red'>style</span> things?  The word style in this paragraph should be red.  _It is indeed styled in red_

Using `grunt-markdown` is probably going to be necessary (rather than just exporting from AI Writer) as I don't need the header (I just need the body, maybe as a string or as part of a JSON object to pass to a template).  It would also be good to have some syntax highlighting for code blocks automated – `grunt-markdown` does this straight away if set up correctly.  It would need HTML minifying anyway (mainly to remove whitespace).


