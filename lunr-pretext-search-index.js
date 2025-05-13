var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "c1s1",
  "level": "1",
  "url": "c1s1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Examples",
  "body": " Examples  We are surrounded by networks: social (Facebook, X, Instagram), communcation (airlines, trains, highways), biological (?), collaboration (Bacon movie or Erdos collaboration). In this section, we describe some examples and how one can use the tools of graph theory to model them.    A graph consists of a set of vertices and a set of edges , where each edge consists of      Let . The complete graph with vertices is the graph whose vertex set is , where any two distinct vertices are adjacent.     The complete graph on vertices     graph={1:[2,3,4,5],2:[3,4,5],3:[4,5],4:[5]}           The Bacon graph is the graph whose vertices are movie actors where two vertices\/actors are adjacent if they have appeared together in a movie.    The Erdos collaboration graph is the graph whose vertices are mathematicians where two vertices\/mathematicians are adjacent if they are co-authors on a math paper.    Most of the examples we consider here are finite graphs, where V and E are both finite.     Let be a graph. For a vertex the degree of x is defined as the number of edges that contain .    We are ready for our first result. This is often called the Handshaking Lemma due to its interpretation.    If is a finite graph, then     The following is a consequence of .    In any finite graph, the number of vertices with odd degree is even.      Two graphs and are isomorphic if there is a bijective function such that       Let and be two graphs. If and are isomorphic, then   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.      "
},
{
  "id": "def-def1",
  "level": "2",
  "url": "c1s1.html#def-def1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A graph consists of a set of vertices and a set of edges , where each edge consists of   "
},
{
  "id": "def-def2",
  "level": "2",
  "url": "c1s1.html#def-def2",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  Let . The complete graph with vertices is the graph whose vertex set is , where any two distinct vertices are adjacent.   "
},
{
  "id": "fig1c1s1",
  "level": "2",
  "url": "c1s1.html#fig1c1s1",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " The complete graph on vertices     graph={1:[2,3,4,5],2:[3,4,5],3:[4,5],4:[5]}         "
},
{
  "id": "c1s1-6",
  "level": "2",
  "url": "c1s1.html#c1s1-6",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " The Bacon graph is the graph whose vertices are movie actors where two vertices\/actors are adjacent if they have appeared together in a movie.  "
},
{
  "id": "c1s1-7",
  "level": "2",
  "url": "c1s1.html#c1s1-7",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " The Erdos collaboration graph is the graph whose vertices are mathematicians where two vertices\/mathematicians are adjacent if they are co-authors on a math paper.  "
},
{
  "id": "c1s1-8",
  "level": "2",
  "url": "c1s1.html#c1s1-8",
  "type": "Remark",
  "number": "1.1.6",
  "title": "",
  "body": " Most of the examples we consider here are finite graphs, where V and E are both finite.  "
},
{
  "id": "def-def3",
  "level": "2",
  "url": "c1s1.html#def-def3",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "  Let be a graph. For a vertex the degree of x is defined as the number of edges that contain .   "
},
{
  "id": "thm1",
  "level": "2",
  "url": "c1s1.html#thm1",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "",
  "body": "  If is a finite graph, then    "
},
{
  "id": "cor1",
  "level": "2",
  "url": "c1s1.html#cor1",
  "type": "Corollary",
  "number": "1.1.9",
  "title": "",
  "body": "  In any finite graph, the number of vertices with odd degree is even.   "
},
{
  "id": "def-def4",
  "level": "2",
  "url": "c1s1.html#def-def4",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  Two graphs and are isomorphic if there is a bijective function such that    "
},
{
  "id": "prop-GraphIsomorphism",
  "level": "2",
  "url": "c1s1.html#prop-GraphIsomorphism",
  "type": "Proposition",
  "number": "1.1.11",
  "title": "",
  "body": "  Let and be two graphs. If and are isomorphic, then   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.     "
},
{
  "id": "c1s2",
  "level": "1",
  "url": "c1s2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph Parameters",
  "body": " Graph Parameters    Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .      Let be a graph. The chromatic number is the smallest such that has a proper -coloring.    "
},
{
  "id": "def-propercol",
  "level": "2",
  "url": "c1s2.html#def-propercol",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .   "
},
{
  "id": "def-chromnumb",
  "level": "2",
  "url": "c1s2.html#def-chromnumb",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  Let be a graph. The chromatic number is the smallest such that has a proper -coloring.   "
},
{
  "id": "c2s1",
  "level": "1",
  "url": "c2s1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Basic Notions",
  "body": " Basic Notions    A graph is called a tree if is connected and contains no cycles.      Every finite tree with at least 2 vertices contains at least 2 leaves.      Deleting a leaf from a tree with vertices yields a tree with vertices.     Let be a tree with vertices. Let be a leaf in . We want to show that is acyclic (contains no cycle) and connected (there is a walk connecting any pair of vertices).    is acyclic then is acyclic (Taking away a vertex will not create a new cycle).    Is connected? Take any two vertices in . Because is a tree, it is connected, there exists an path in . Note that the degree of vertices in the middle of the path is 2, so the removal of vertex of degree 1 and the edge incident to it doesn't effect the path . Thus, in , the vertices and are still connected by a path, hence is connected.         Let be a graph with vertices. The following statements are equivalent:    is a tree (connected and acyclic)     is connected and has edges.     is acyclic and has $n-1$ edges    For every two distinct vertices of , there is a unique path connecting them.       "
},
{
  "id": "def-tree1",
  "level": "2",
  "url": "c2s1.html#def-tree1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A graph is called a tree if is connected and contains no cycles.   "
},
{
  "id": "prop-numberleaves-intree",
  "level": "2",
  "url": "c2s1.html#prop-numberleaves-intree",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  Every finite tree with at least 2 vertices contains at least 2 leaves.   "
},
{
  "id": "prop-trees-delete-leaf",
  "level": "2",
  "url": "c2s1.html#prop-trees-delete-leaf",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": "  Deleting a leaf from a tree with vertices yields a tree with vertices.   "
},
{
  "id": "c2s1-5",
  "level": "2",
  "url": "c2s1.html#c2s1-5",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " Let be a tree with vertices. Let be a leaf in . We want to show that is acyclic (contains no cycle) and connected (there is a walk connecting any pair of vertices).    is acyclic then is acyclic (Taking away a vertex will not create a new cycle).    Is connected? Take any two vertices in . Because is a tree, it is connected, there exists an path in . Note that the degree of vertices in the middle of the path is 2, so the removal of vertex of degree 1 and the edge incident to it doesn't effect the path . Thus, in , the vertices and are still connected by a path, hence is connected.      "
},
{
  "id": "thm-Tree-equivstatement",
  "level": "2",
  "url": "c2s1.html#thm-Tree-equivstatement",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "",
  "body": "  Let be a graph with vertices. The following statements are equivalent:    is a tree (connected and acyclic)     is connected and has edges.     is acyclic and has $n-1$ edges    For every two distinct vertices of , there is a unique path connecting them.      "
},
{
  "id": "c2s2",
  "level": "1",
  "url": "c2s2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Prufer Codes",
  "body": " Prufer Codes    Find the Prufer code of the following trees       pf1     graph={1:[5],2:[4,9],3:[8],4:[5],5:[8],6:[7], 7:[8]}              "
},
{
  "id": "c2s2-2",
  "level": "2",
  "url": "c2s2.html#c2s2-2",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "",
  "body": "  Find the Prufer code of the following trees       pf1     graph={1:[5],2:[4,9],3:[8],4:[5],5:[8],6:[7], 7:[8]}             "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
