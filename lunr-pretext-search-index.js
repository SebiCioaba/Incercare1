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
  "title": "Examples and Basic Notions",
  "body": " Examples and Basic Notions  We are surrounded by networks: social (Facebook, X, Instagram), communication (airlines, trains, highways), biological (?), collaboration (Bacon movie or Erdos collaboration). In this section, we describe some examples and how one can use the tools of graph theory to model them.   An abstract view of a social network is to consider the people of the network as nodes or points in the plane and for any two people that friends, draw a line or curve between the points representing them.     A simple graph consists of a set of vertices and a set of edges , where each edge consists of two distinct vertices.     A graph on vertices     graph={1:[2,3,4,5],2:[3],3:[],4:[5],5:[]}          For the graph in    Let . The complete graph with vertices is the graph whose vertex set is , where any two distinct vertices are adjacent.     The complete graph on vertices     graph={1:[2,3,4,5],2:[3,4,5],3:[4,5],4:[5]}           The Bacon graph is the graph whose vertices are movie actors where two vertices\/actors are adjacent if they have appeared together in a movie.    The Erdos collaboration graph is the graph whose vertices are mathematicians where two vertices\/mathematicians are adjacent if they are co-authors on a math paper.    Most of the examples we consider here are finite graphs, where V and E are both finite.     Let be a graph. For a vertex , the neighborhood (or if the graph is clear from the context) of is the set of neighbors of : The degree (or if the graph is clear from the context) of x is defined as the number of edges that contain , .    For the graph in ,   We are ready for our first result. This is often called the Handshaking Lemma due to its interpretation.    If is a finite graph, then     The following is a consequence of .    In any finite graph, the number of vertices with odd degree is even.      Two graphs and are isomorphic if there is a bijective function such that       Let and be two graphs. If and are isomorphic, then    For any , .   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.          Assume that is an isomorphism between and . Because is a bijective function, we deduce that .   Let . For any that is adjacent with , is adjacent to . The function restricted to the neighborhood of is a bijection between the neighborhood of and the neighborhood of . Therefore,       "
},
{
  "id": "c1s1-3",
  "level": "2",
  "url": "c1s1.html#c1s1-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " An abstract view of a social network is to consider the people of the network as nodes or points in the plane and for any two people that friends, draw a line or curve between the points representing them.  "
},
{
  "id": "def-def1",
  "level": "2",
  "url": "c1s1.html#def-def1",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  A simple graph consists of a set of vertices and a set of edges , where each edge consists of two distinct vertices.   "
},
{
  "id": "fig0c1s1",
  "level": "2",
  "url": "c1s1.html#fig0c1s1",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A graph on vertices     graph={1:[2,3,4,5],2:[3],3:[],4:[5],5:[]}         "
},
{
  "id": "def-def2",
  "level": "2",
  "url": "c1s1.html#def-def2",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  Let . The complete graph with vertices is the graph whose vertex set is , where any two distinct vertices are adjacent.   "
},
{
  "id": "fig1c1s1",
  "level": "2",
  "url": "c1s1.html#fig1c1s1",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " The complete graph on vertices     graph={1:[2,3,4,5],2:[3,4,5],3:[4,5],4:[5]}         "
},
{
  "id": "c1s1-9",
  "level": "2",
  "url": "c1s1.html#c1s1-9",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " The Bacon graph is the graph whose vertices are movie actors where two vertices\/actors are adjacent if they have appeared together in a movie.  "
},
{
  "id": "c1s1-10",
  "level": "2",
  "url": "c1s1.html#c1s1-10",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " The Erdos collaboration graph is the graph whose vertices are mathematicians where two vertices\/mathematicians are adjacent if they are co-authors on a math paper.  "
},
{
  "id": "c1s1-11",
  "level": "2",
  "url": "c1s1.html#c1s1-11",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": " Most of the examples we consider here are finite graphs, where V and E are both finite.  "
},
{
  "id": "def-def3",
  "level": "2",
  "url": "c1s1.html#def-def3",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  Let be a graph. For a vertex , the neighborhood (or if the graph is clear from the context) of is the set of neighbors of : The degree (or if the graph is clear from the context) of x is defined as the number of edges that contain , .   "
},
{
  "id": "thm1",
  "level": "2",
  "url": "c1s1.html#thm1",
  "type": "Theorem",
  "number": "1.1.10",
  "title": "",
  "body": "  If is a finite graph, then    "
},
{
  "id": "cor1",
  "level": "2",
  "url": "c1s1.html#cor1",
  "type": "Corollary",
  "number": "1.1.11",
  "title": "",
  "body": "  In any finite graph, the number of vertices with odd degree is even.   "
},
{
  "id": "def-def4",
  "level": "2",
  "url": "c1s1.html#def-def4",
  "type": "Definition",
  "number": "1.1.12",
  "title": "",
  "body": "  Two graphs and are isomorphic if there is a bijective function such that    "
},
{
  "id": "prop-GraphIsomorphism",
  "level": "2",
  "url": "c1s1.html#prop-GraphIsomorphism",
  "type": "Proposition",
  "number": "1.1.13",
  "title": "",
  "body": "  Let and be two graphs. If and are isomorphic, then    For any , .   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.     "
},
{
  "id": "c1s1-20",
  "level": "2",
  "url": "c1s1.html#c1s1-20",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": "    Assume that is an isomorphism between and . Because is a bijective function, we deduce that .   Let . For any that is adjacent with , is adjacent to . The function restricted to the neighborhood of is a bijection between the neighborhood of and the neighborhood of . Therefore,      "
},
{
  "id": "c1s2",
  "level": "1",
  "url": "c1s2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Bipartite Graphs",
  "body": " Bipartite Graphs    Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .      Let be a graph. The chromatic number is the smallest such that has a proper -coloring.    "
},
{
  "id": "def-something1",
  "level": "2",
  "url": "c1s2.html#def-something1",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .   "
},
{
  "id": "def-other",
  "level": "2",
  "url": "c1s2.html#def-other",
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
  "id": "c2s3",
  "level": "1",
  "url": "c2s3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Minimum Spanning Tree",
  "body": " Minimum Spanning Tree    A spanning tree of a graph is a subgraph of that spans (contains all nodes of ) and is a tree (a connected, acyclic graph).    Let be a connected graph. Define a weight function:   Let be a subgraph of , then the weight of is given by .    A minimum spanning tree (MST) is a spanning tree for which has minimum total weight.     Minimum spanning tree problem is a problem to find a spanning tree of of minimum weight.   In the graph below, find a spanning tree of of minimum weight.   Example: Minimum Spanning Tree     graph={1:[2,3,5],2:[4,5,6],3:[5],4:[6],5:[6]}           "
},
{
  "id": "def-minSpanTree",
  "level": "2",
  "url": "c2s3.html#def-minSpanTree",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A spanning tree of a graph is a subgraph of that spans (contains all nodes of ) and is a tree (a connected, acyclic graph).   "
},
{
  "id": "def-",
  "level": "2",
  "url": "c2s3.html#def-",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  A minimum spanning tree (MST) is a spanning tree for which has minimum total weight.   "
},
{
  "id": "c2s3-7",
  "level": "2",
  "url": "c2s3.html#c2s3-7",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " In the graph below, find a spanning tree of of minimum weight.   Example: Minimum Spanning Tree     graph={1:[2,3,5],2:[4,5,6],3:[5],4:[6],5:[6]}          "
},
{
  "id": "c3s1",
  "level": "1",
  "url": "c3s1.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Independence Number",
  "body": " The Independence Number  In many situations, one is interested in investigating subsets of vertices of a graph with certain properties. The most often studied such subsets are independent sets and cliques.    blabla Let be a graph. A subset of vertices of is called independent if no two vertices in are adjacent.     A graph on 6 vertices     graph={1:[2,3,4,6],2:[3],3:[4,5],4:[5],5:[6]}           In the graph in , the sets , and are independent.    In the graph in , the sets and are not independent.     Let be a graph. A subset of vertices of is called a clique if any two vertices in are adjacent.    In the graph in , the sets and are cliques while the sets is not a clique.    Let be a graph. The clique number of is the maximum size of an clique of .    "
},
{
  "id": "def-indset",
  "level": "2",
  "url": "c3s1.html#def-indset",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  blabla Let be a graph. A subset of vertices of is called independent if no two vertices in are adjacent.   "
},
{
  "id": "fig1c3s1",
  "level": "2",
  "url": "c3s1.html#fig1c3s1",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " A graph on 6 vertices     graph={1:[2,3,4,6],2:[3],3:[4,5],4:[5],5:[6]}         "
},
{
  "id": "c3s1-5",
  "level": "2",
  "url": "c3s1.html#c3s1-5",
  "type": "Remark",
  "number": "3.1.3",
  "title": "",
  "body": " In the graph in , the sets , and are independent.  "
},
{
  "id": "c3s1-6",
  "level": "2",
  "url": "c3s1.html#c3s1-6",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " In the graph in , the sets and are not independent.  "
},
{
  "id": "def-clique",
  "level": "2",
  "url": "c3s1.html#def-clique",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": "  Let be a graph. A subset of vertices of is called a clique if any two vertices in are adjacent.   "
},
{
  "id": "def-cliquenumber",
  "level": "2",
  "url": "c3s1.html#def-cliquenumber",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": "  Let be a graph. The clique number of is the maximum size of an clique of .   "
},
{
  "id": "c3s2",
  "level": "1",
  "url": "c3s2.html",
  "type": "Section",
  "number": "3.2",
  "title": "The chromatic number",
  "body": " The chromatic number    Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .      Let be a graph. The chromatic number is the smallest such that has a proper -coloring.    "
},
{
  "id": "def-propercol",
  "level": "2",
  "url": "c3s2.html#def-propercol",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let and . A proper -coloring of is a function such that for any two adjacent vertices and , .   "
},
{
  "id": "def-chromnumb",
  "level": "2",
  "url": "c3s2.html#def-chromnumb",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be a graph. The chromatic number is the smallest such that has a proper -coloring.   "
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
