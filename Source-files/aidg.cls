%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%    Style created for typesetting several /aidg/ community guides.
%    NEEDS LUALATEX TO COMPILE
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{aidg}[2020/12/20 /aidg/ LaTeX document class]

\DeclareOption*{%
  \PassOptionsToClass{\CurrentOption}{scrreprt}% or book or whatever
}

% Now we'll execute any options passed in
\ProcessOptions\relax

% Instead of defining each and every little detail required to create a new document class,
% you can base your class on an existing document class.
\LoadClass{scrreprt}% or book or whatever you class is closest to

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    PACKAGES TO LOAD
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\RequirePackage[activate={true,nocompatibility},final,protrusion=true,tracking=true,factor=1000,stretch=10,shrink=10]{microtype} % A bit closer to typographic perfection
%\RequirePackage{imakeidx}
\RequirePackage[pdfdisplaydoctitle,pdfa,unicode,pdfversion=1.7]{hyperref} % Neeeded for cross-references and clickable links
\RequirePackage{hyperxmp} % For embedding XMP metadata into PDF
\RequirePackage[numbered,open=true,openlevel=2]{bookmark} % Better version of hyperref bookmarks
\RequirePackage{scrdate} % For setting universal date standard
\RequirePackage[dvipsnames,cmyk,hyperref]{xcolor} % Color definitions
\RequirePackage{tagpdf} % Very experimental accessiblity package
\RequirePackage{fontspec} % Easy font selection and size declarations
\RequirePackage{enumitem} % Lists formatting
\RequirePackage[many]{tcolorbox} % For typesetting World Info entry box
\RequirePackage[os=win]{menukeys} % Used for highlighting Input modes
\RequirePackage{subfiles} % For separating project into disctict files
\RequirePackage[capitalize,nameinlink]{cleveref} % Easier labeling
\RequirePackage[backend=biber,style=reading]{biblatex}
\RequirePackage{soulutf8} % Text highlighting
\RequirePackage{xspace} % Adaptive space in macro shortcuts
\RequirePackage{etoolbox}
\RequirePackage{changelog}
\RequirePackage[headsepline,autooneside=false,automark]{scrlayer-scrpage} % Customizable header and footer via page styles
\RequirePackage[nopostdot,toc,]{glossaries}
\RequirePackage{lettrine}
\RequirePackage[all]{nowidow}
\RequirePackage{multicol}
\RequirePackage{xsavebox}
\RequirePackage[english=american]{csquotes}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    PACKAGE SETTINGS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\MakeOuterQuote{"}

%\makeglossaries

\tagpdfsetup{activate-all, % Although this passes validation, true accessiblity support is still unavailable for LaTeX
%uncompress,
}

% KOMA-Script package options

\KOMAoptions{
%toc=sectionentrydotfill, % Adds dots in ToC for sections
%titlepage=true,
toc=bibliography,
}

\clearpairofpagestyles
\ohead{\leftmark}
\ihead{\rightmark}
\cfoot*{\pagemark}

\renewcommand*{\titlepagestyle}{empty}
\renewcommand*{\partpagestyle}{empty}

\setkomafont{part}{\fontsize{42pt}{50.4pt}\selectfont}
\addtokomafont{disposition}{\rmfamily}
%\addtokomafont{sectionentry}{\bfseries}
\renewcommand*{\chapterheadstartvskip}{\vspace*{0em}}

\setkomafont{dictumtext}{\itshape\small}
\setkomafont{dictumauthor}{\normalfont}
\renewcommand*\dictumwidth{0.3333\linewidth}
\renewcommand*\dictumauthorformat[1]{\small--- #1\vspace{1em}}
\renewcommand*\dictumrule{}

% enumitem
\setlist[description]{ %
  %topsep=30pt,               % space before start / after end of list
  %itemsep=5pt,               % space between items
  style=nextline,
  labelsep=2em,
  font=\rmfamily\bfseries, % set the label font
}

% cleveref

%\crefname{section}{\S}{\S\S}
%\Crefname{section}{\S}{\S\S}
%\crefname{subsection}{\S}{\S\S}
%\Crefname{subsection}{\S}{\S\S}
%\crefname{subsubsection}{\S}{\S\S}
%\Crefname{subsubsection}{\S}{\S\S}

% lettrine
%\renewcommand{\LettrineFontHook}{\Typocapsfamily}%{Rothdnfamily}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    COLOR DEFINITIONS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\definecolor{bluebox}{rgb}{0.0, 0.08, 0.99}
\definecolor{yellowbox}{rgb}{0.99, 0.99, 0.8}
\definecolor{bisque}{rgb}{0.96, 0.96, 0.86}
\definecolor{beaublue}{rgb}{0.74, 0.83, 0.9}
\definecolor{memecolor}{cmyk}{0.03, 0.00, 0.43, 0.32}

\definecolor{chaptercolor}{cmyk}{1, 0.5, 0, 0}

\newcommand\myshade{85}
\colorlet{mylinkcolor}{violet}
\colorlet{mycitecolor}{YellowOrange}
\colorlet{myurlcolor}{Aquamarine}

%Hyperref links color
\hypersetup{ %
% Color scheme definitions for links
% Taken from https://tex.stackexchange.com/a/176372
  linkcolor  = mylinkcolor!\myshade!black,
  citecolor  = mycitecolor!\myshade!black,
  urlcolor   = myurlcolor!\myshade!black,
  colorlinks = true,
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    GENERAL STYLE
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\frenchspacing % Forces single space between sentences



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    COVER AND TITLE OUTPUT
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\addtokomafont{author}{\bfseries\huge}
\addtokomafont{date}{\bfseries\Large}

\NewDocumentCommand{\makeaidgtitle}{ m O{keepaspectratio} m m m O{}}{

\title{
	\textls{\uppercase{#1}}\\
	\vspace*{\fill}
	\tcbox[colback=bluebox,
left=0mm,right=0mm,top=0mm,bottom=0mm,boxsep=1mm,boxrule=0.5pt,
]{%
\includegraphics[#2]{#3}}
	%\vspace*{\fill}
}

\author{%\vspace*{\fill}
	by\\#4\\\Large
	#6%\href{mailto:#6}{#6}
}

\date{\vspace*{\fill}
	Version #5\\
	\ISOToday	
}

\pagecolor{bisque}
\maketitle
\nopagecolor

}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     EMBEDDING XMP METADATA
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\hypersetup{ % This embeds XMP metadata into the PDF.
pdfapart=3,
pdfaconformance=a,
%pdfuapart=1, % LaTeX will hopefully support this in future
pdfxstandard={PDF/X-3:2003},
}

\newcommand{\embedavsfagmetadata}{
\hypersetup{ % This embeds XMP metadata into the PDF.
pdftitle={/AIDG/ Writing Guide},
pdfauthor={Avsfag},
pdfauthortitle={Power Coomer},
pdfkeywords={AI Dungeon, writing, guide},
%pdfcontacturl={https://github.com/CoomersGuide/CoomersGuide.github.io},
%baseurl={https://github.com/CoomersGuide/CoomersGuide.github.io},
%pdfurl={https://github.com/CoomersGuide/CoomersGuide.github.io/blob/main/A\%20Coomer's\%20Guide\%20to\%20AI\%20Dungeon.pdf},
pdfversionid={1},
pdfpubtype={manual},
pdflang={en-US},
pdfmetalang={en},
}
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    CUSTOM MACROS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\newcommand{\keyS}[1]{\keys{\rmfamily {#1}}} % For menukeys to use serifs

\newcommand{\aid}{AI Dungeon\xspace}
\newcommand{\wi}{World Info\xspace}
\newcommand{\an}{Author's Note\xspace}
\newcommand{\ans}{Author's Notes\xspace}

\newcommand{\aidgmacrosactivate}{
\newcommand{\rem}{\keyS{/remember}\xspace}
\newcommand{\alt}{\keyS{/alter}\xspace}
\newcommand{\Do}{\keyS{Do}\xspace}
\newcommand{\say}{\keyS{Say}\xspace}
\newcommand{\story}{\keyS{Story}\xspace}
}

\aidgmacrosactivate

\newcommand{\aidgmacrossimple}{
\renewcommand{\rem}{/remember\xspace}
\renewcommand{\alt}{/alter\xspace}
\renewcommand{\Do}{Do\xspace}
\renewcommand{\say}{Say\xspace}
\renewcommand{\story}{Story\xspace}
}

\newcommand{\aidgmacrospretty}{
\renewcommand{\rem}{\keyS{/remember}\xspace}
\renewcommand{\alt}{\keyS{/alter}\xspace}
\renewcommand{\Do}{\keyS{Do}\xspace}
\renewcommand{\say}{\keyS{Say}\xspace}
\renewcommand{\story}{\keyS{Story}\xspace}
}

\newcommand{\Input}[1]{\textcolor{green}{#1}}
\newcommand{\alter}[1]{\textcolor{yellow}{#1}}
\newcommand{\retry}[1]{\textcolor{red}{#1}}

%\newcommand{\lettr}[2]{\lettrine[lines=3]{#1}{#2}}


% https://tex.stackexchange.com/a/224746
\def\lettr #1#2 {% note the space before {
  \lettrine[lines=3]{#1}{#2} % a trailing space
}

\NewDocumentCommand{\epig}{ O{} O{} m }{
	\setchapterpreamble[u]{
	\dictum[\ifblank{#1#2}{}{\IfValueTF={#1}{#1}{}\ifblank{#2}{}{,\space\em}\IfValueTF={#2}{#2}{}}]{``#3''}
}
}

\NewDocumentCommand{\epign}{ m }{
	\setchapterpreamble[u]{
	\dictum{``#1''}\vspace{1em}
}
}

\newcommand{\memearrow}[1]{\textcolor{green}{>#1}}

% -----------------------------------------
% https://tex.stackexchange.com/a/544121
% -----------------------------------------

% I know this is an old question, but the answers from both Gonzalo Medina and Stephen may interact poorly with hyperref.
% I did not test the titlefoot package but, from my limited understanding of the LaTeX code, it seems it may not be immune either.

% Apparently, however, we are "safe" by using @xfootnotenext, as hyperref's implementation of it delegates to the default LaTeX footnote code.
% And it is simple to do so, just call \footnotetext with an optional parameter.
% To do that, switch footnote markers temporarily to symbols and select 0 as the symbol.
% Nothing gets printed (no symbol for 0), nothing gets added to the text (we are just using footnotetext), and hyperref does not try to add anchors or links.

\newcommand\extrafootertext[1]{%
    \bgroup
    \renewcommand\thefootnote{\fnsymbol{footnote}}%
    \renewcommand\thempfootnote{\fnsymbol{mpfootnote}}%
    \footnotetext[0]{#1}%
    \egroup
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    CUSTOM TCOLORBOXES
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% World Info
\newtcolorbox{WI}[1]{ % Box used for World Info examples
enhanced,
colframe=bluebox,
colback=yellowbox,
%colback=beaublue,
coltitle=white,
fonttitle=\bfseries,
halign title=flush center,
title={#1},
}

\newtcolorbox{/rm}{ % Box used for Memory examples
%enhanced,
lowerbox=visible,
colframe=bluebox,
colback=yellowbox,
%colback=beaublue,
%coltitle=white,
%fonttitle=\bfseries,
%halign title=flush center,
%title={#1},
}

\newtcolorbox{/an}{ % Box used for Author's Note examples
%enhanced,
lowerbox=visible,
colframe=bluebox,
colback=yellowbox,
%colback=beaublue,
%coltitle=white,
%fonttitle=\bfseries,
%halign title=flush center,
%title={#1},
}

%Story snippet
\newtcolorbox{storyb}{
enhanced,
colframe=bluebox,
colback=beaublue,
}

% Story
\NewTColorBox[auto counter]{Story}{ m }{% Input box
enhanced,
title={Story example \textnumero\thetcbcounter: #1},
halign title=flush center,
colframe=bluebox,
colback=beaublue,
before lower*={
\begin{center}
\tikz \node [label=right:Human Input,draw,fill=green] (input) {};
\tikz \node [label=right:Altered Response,draw,fill=yellow] (alter) {};
\tikz \node [label=right:Retried Response,draw,fill=red] (retry) {};
\end{center}
},  
}

% Box used for typesetting ToC was adapted from tcolorbox manual.
% Namely, a watermark ``Contents'' was removed from it.
% To obtain unaltered version, go to CTAN repository and get tcolorbox package.
% The code in question is located inside ``tcolorbox.doc.abstract.tex'' file.
% Authors of tcolorbox are not responsible for the breakage of this code and must not be asked to fix it.
% This style's author is distributing this code according to the Clause 6 of ``Conditions on Distribution and Modification'' of The LATEX Project Public License 1.3c.

\newtcolorbox{ToCbox}{breakable,enhanced jigsaw,title={Contents},fonttitle=\bfseries\Large,
  colback=yellow!10!white,colframe=red!50!black,before=\par\bigskip\noindent,
  interior style={fill overzoom image=goldshade.png,fill image opacity=0.25},
  colbacktitle=red!50!yellow!75!black,
  enlargepage flexible=\baselineskip,pad at break*=3mm,
  height fixed for=first and middle,
  attach boxed title to top center={yshift=-0.25mm-\tcboxedtitleheight/2,yshifttext=2mm-\tcboxedtitleheight/2},
  boxed title style={enhanced,boxrule=0.5mm,
    frame code={ \path[tcb fill frame] ([xshift=-4mm]frame.west) -- (frame.north west)
    -- (frame.north east) -- ([xshift=4mm]frame.east)
    -- (frame.south east) -- (frame.south west) -- cycle; },
    interior code={ \path[tcb fill interior] ([xshift=-2mm]interior.west)
    -- (interior.north west) -- (interior.north east)
    -- ([xshift=2mm]interior.east) -- (interior.south east) -- (interior.south west)
    -- cycle;}  },
  drop fuzzy shadow}

\newcommand{\tcolortoc}{
\begin{ToCbox}
\makeatletter
\thispagestyle{plain}
\@starttoc{toc}
\makeatother
\end{ToCbox}
\thispagestyle{plain}
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    CHAPTER HEADINGS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Makes sections the same color as the Chapter
\addtokomafont{section}{\color{chaptercolor}}
\addtokomafont{subsection}{\color{chaptercolor}}

% -----------------------------------------
% https://tex.stackexchange.com/a/423153
% Adds colored shading and counter formatting
% -----------------------------------------

\renewcommand\raggedchapter{\raggedleft}
\setkomafont{chapter}{\Huge}
\setkomafont{chapterprefix}{\large}
\newkomafont{chapternumber}{\mdseries\fontsize{50pt}{60pt}\selectfont}

\renewcommand*{\chapterformat}{
\mbox{\chapappifchapterprefix{\nobreakspace}\thechapter
\IfUsePrefixLine{}{\enskip}}}

\tikzset{
    headings/base/.style = {
      outer sep = 0pt,
      inner sep = 5pt,
    },
    headings/chapterbackground/.style = {
      headings/base,
      shade,
      left color = white,
      right color = chaptercolor,
    },
    headings/chapapp/.style = {
      headings/base,
      text = chaptercolor,
      font = \usekomafont{chapterprefix}
    },
    headings/chapternumber/.style= {
      headings/base,
      text = chaptercolor,
      font = \usekomafont{chapternumber}
    },
    headings/chapterline/.style = {
      chaptercolor,
      line width = 2pt
    }
}
\makeatletter
\renewcommand*\chapterlinesformat[3]{%
  \Ifstr{#1}{chapter}{%
    \begin{tikzpicture}[baseline=(title.base)]
      \node[headings/chapterbackground](title){%
        \parbox[t]
          {\dimexpr\textwidth-2\pgfkeysvalueof{/pgf/inner xsep}\relax}
          {\raggedchapter #3}%
      };
      \node[headings/chapapp,anchor=south east]
        at (title.north east){\Ifstr{#2}{}{}{\chapapp}\strut};
      \useasboundingbox
        (current bounding box.north west)
        rectangle
        ([yshift=-10pt]current bounding box.south east);
      \draw[headings/chapterline]
        (current bounding box.south east)++(+.5\pgflinewidth,0)--+(0,\paperheight);
      \node[anchor=base west,headings/chapternumber]
        at([xshift=10pt]title.base-|current bounding box.east){#2};
    \end{tikzpicture}
    \par
  }{%
    \@hangfrom{#2}{#3}% other section levels using style=chapter
  }%
}
\makeatother
% -----------------------------------------

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    PATCHES
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% ------------------------------------------
% https://tex.stackexchange.com/a/536060
% Code taken to pass PDF/A and PDF/X color model validation check
% -----------------------------------------
% Which paper did the authors have in mind when they created the document?
\immediate\pdfobj stream attr{/N 4} file{../PSO-Uncoated-ISO12647-eci.icc}
\pdfcatalog{%
  /OutputIntents [ <<
    /Type /OutputIntent
    /S /GTS_PDFX
    /DestOutputProfile \the\pdflastobj\space 0 R
    /Info(PSO Uncoated ISO12647 (ECI))
    /OutputCondition(Offset printing, according to ISO 12647-2:2004/Amd1, OFCOM, paper type 4 = uncoated white, 115 g/m2, tone value increase curves C (CMY) and D (K))
    /OutputConditionIdentifier (Uncoated FOGRA47)
    /RegistryName(http://www.color.org)
  >>
  <<
    /Type /OutputIntent
    /S /GTS_PDFA1
    /DestOutputProfile \the\pdflastobj\space 0 R
    /Info(PSO Uncoated ISO12647 (ECI))
    /OutputCondition(Offset printing, according to ISO 12647-2:2004/Amd1, OFCOM, paper type 4 = uncoated white, 115 g/m2, tone value increase curves C (CMY) and D (K))
    /OutputConditionIdentifier (Uncoated FOGRA47)
    /RegistryName(http://www.color.org)
  >> ]
}

\makeatletter
% Bugfix of hyperref to produce CMYK links
\let\HyColor@HyperrefBorderColor\HyColor@XZeroOneThreeFour
\makeatother

\makeatletter
% We need to tell PDF/X the final format of the paper. This needs adjustment if you want graphics on the page border, called bleeding
\@tempdima=0.99626400996264009962\paperwidth
\edef\boxwd{\strip@pt\@tempdima}
\@tempdima=0.99626400996264009962\paperheight
\edef\boxht{\strip@pt\@tempdima}
\makeatother
\edef\next{%
  \protect\pdfpageattr{
    /TrimBox[0.0 0.0 \boxwd\space \boxht]
  }%
}
\next

% This example uses the rather new version of hyperxmp.
% It validates in Acrobat DC, VeraPDF and 3-Heights when compiled either in pdfLaTeX or LuaLaTeX.
%The hyperref workaround is from it's issue tracker.

% I used FOGRA47 as the colour profile because it is small and thus safe.
% You don't easily risk colours which cannot be printed or displayed on screen.
% The profile is available from European Color Initiative.
% ------------------------------------------

% -----------------------------------------
% https://tex.stackexchange.com/a/568785
% Code needed to prevent paragraph indentation after tcolorboxes
% -----------------------------------------
% Appending \@endparenv, which is used by every list environment, to /tcb/after seems to work.

% Update: For breakable boxes, some experimental attempt is added.

%\makeatletter
%\tcbset{
%  after app={%
%    \ifx\tcb@drawcolorbox\tcb@drawcolorbox@breakable
%    \else
%      % add only when not breakabel
%      \@endparenv
%    \fi
%  }
%}

% for breakable
%\appto\tcb@use@after@lastbox{\@endparenv\@doendpe}
%\makeatother
% -----------------------------------------

% -----------------------------------------
% https://tex.stackexchange.com/a/24067
% Prevents KOMA-Script chapter from starting new page
% -----------------------------------------
% The \chapter command internally uses \cleardoublepage and \clearpage to add page breaks.
% Use the etoolbox package to selectively change the definition of \chapter.

% For KOMA-Script scrbook from version 3.19a (and most likely for other KOMA-Script classes, too), you need to patch \scr@startchapter instead of chapter:

% \makeatletter
% \patchcmd{\scr@startchapter}{\if@openright\cleardoublepage\else\clearpage\fi}{}{}{}
% \makeatother
% -----------------------------------------

% -----------------------------------------
% https://tex.stackexchange.com/a/48502
% -----------------------------------------

% The source of the problem is that both xcolor and soul use \dimen@ as a temporary register.
% And soul uses it at a place where it can't be sure that other commands temper around with this dimen.
% You can redefine the internal soul command, or you can use \convertcolorsUfalse so that xcolor no longer recalculate color at usage:

% If you don't want to copy the definition from soul.sty, here's a way to patch the command:

\makeatletter
\patchcmd{\SOUL@ulunderline}{\dimen@}{\SOUL@dimen}{}{}
\patchcmd{\SOUL@ulunderline}{\dimen@}{\SOUL@dimen}{}{}
\patchcmd{\SOUL@ulunderline}{\dimen@}{\SOUL@dimen}{}{}
\newdimen\SOUL@dimen
\makeatother

% This will work even if the soul package is updated (because the patch won't succeed).
% -----------------------------------------

% code stored for later
%https://tex.stackexchange.com/a/348146

%\usepackage{xstring}

%\makeatletter
%\let\ltx@@chapter\@chapter
%\def\@chapter[#1]#2 #3 {\ltx@@chapter[#1]{#2}\lettrine[nindent=0em]{\StrLeft{#3}{1}}{\@gobble#3}\ }
%\makeatother

\endinput
