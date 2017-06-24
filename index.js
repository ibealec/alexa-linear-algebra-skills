'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = 'amzn1.ask.skill.085ff3e3-3896-4729-9030-e2b9f3877e7d';

var SKILL_NAME = "Space Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Fix the grammar
//=========================================================================================================================================
var data = [
    {
      word:"algebraic multiplicity",
      definition: "The multiplicity of an eigenvalue as a root of the characteristic equation."
    }, {
      word: "Associative law of multiplication",
      definition: "A(BC) = (AB)C"
    }, {
      word: "augmented matrix",
      definition: "a matrix made up of a coefficient matrix for a linear system and one or more columns to the right"
    }, {
      word: "auxiliary equation",
      definition: "a polynomial equation in a variable r, created from the coefficients of a homogeneous difference equation"
    }, {
      word: "basic variable",
      definition: "a variable in a linear system that corresponds to a pivot column in the coefficient matrix"
    }, {
      word: "basis",
      definition: "an indexed set B={v1.....vp} in V such that: B is a linearly independent set and H = span{v1...vp}"
    }, {
      word: "change of coordinate matrix",
      definition: "a matrix P C<-B that transforms B coordinate vectors into C coordinate vectors"
    }, {
      word: "characteristic equation",
      definition: "det(A - lambda I)=0"
    }, {
      word: "characteristic polynomial",
      definition: "det(A - labda I)"
    }, {
      word: "codomain",
      definition: "the set Rm that contains the range of T, if T maps a vector space V into a vector space W, W is the codomain"
    }, {
      word: "coefficient matrix",
      definition: "a matrix whose entries are the coefficients of a system of linear equations"
    }, {
      word: "cofactor expansion",
      definition: "a formula for det A using cofactors associated with one row or one column"
    }, {
      word: "column space",
      definition: "the set Col A of all linear combinations of the columns of A"
    }, {
      word: "column vector",
      definition: "a matrix with only one column"
    }, {
      word: "commuting matrices",
      definition: "AB = BA"
    }, {
      word: "composition of linear transformations",
      definition: "a mapping produced by applying two or more linear transformations in succession"
    }, {
      word: "consistent linear system",
      definition: "a linear system with at least one solution"
    }, {
      word: "coordinate mapping",
      definition: "a mapping that associates to each x in V its coordinate vector [x]B"
    }, {
      word: "coordinates of x relative to the basis B = {b1....bn}",
      definition: "The weights c1, ..., cn in the equation x = c1b1 + ..... + cnbn"
    }, {
      word: "coordinate vector of x relative to B",
      definition: "The vector [x]B whose entries are the coordinates of x relative to the basis B"
    }, {
      word: "determinant",
      definition: "ad-bc, real number associatied with a square matrix"
    }, {
      word: "diagonal entries",
      definition: "entries having equal row and column indices"
    }, {
      word: "diagonalizable",
      definition: "a matrix that can be written in factored form as PDP^-1 where D is the diagonal matrix and P the invertible matrix"
    }, {
      word: "diagonal matrix",
      definition: "a square matrix whose entries not on the main diagonal are all zero"
    }, {
      word: "dimension",
      definition: "of a subspace: the number of vectors in a basis for S written as dim S of a vector space: the number of vectors in a basis for V, written dim V"
    }, {
      word: "distributive laws",
      definition: "A(B+C) = AB + AC and (B+C)A = BA + CA"
    }, {
      word: "domain",
      definition: "the set of all vectors x for which T(x) is defined"
    }, {
      word: "eigenspace",
      definition: "the set of all solutions of Ax = lamda(x) where lambda is an eigenvalue, consists of all eigenvectors and the zero vector"
    }, {
      word: "eigenvalue",
      definition: "a scalar lambda such that the equation Ax=lambda(x) has a solution for some nonzero vector x"
    }, {
      word: "eigenvector",
      definition: "a nonzero vector x such that Ax = lambda(x) for some scalar lambda"
    }, {
      word: "eigenvector basis",
      definition: "eigenvectors forming basis for Rn (invertible); necessary for nxn A to be diagonalizable"
    }, {
      word: "eigenvector decomposition",
      definition: "an equation x = c1v1+.....cnvn expressing x as a linear combination of eigenvectors of a matrix"
    }, {
      word: "equal vectors",
      definition: "vectors in Rn whose corresponding entries are the same"
    }, {
      word: "equivalent systems",
      definition: "linear systems with the same solution set"
    }, {
      word: "finite dimensional",
      definition: "a vector space that is spanned by a finite set of vectors"
    }, {
      word: "free variable",
      definition: "any variable in a linear system that is not a basic variable"
    }, {
      word: "full rank",
      definition: "an m x n matrix whose rank is the smaller of m and n"
    }, {
      word: "fundamental set of solutions",
      definition: "a basis for the set of all solutions of a homogeneous linear difference or difference equation"
    }, {
      word: "fundamental subspaces",
      definition: "the null space and column space of A, and the null space and column space of A^T, with Col A^T commonly called the row space of A"
    }, {
      word: "homogenous equation",
      definition: "an equation of the form Ax=0 possibly written as a vector equation or as a system of linear equaitons"
    }, {
      word: "image",
      definition: "the vector T(x) assigned to x by T"
    }, {
      word: "inconsistent linear system",
      definition: "a linear system with no solution"
    }, {
      word: "infinite dimensional",
      definition: "a nonzero vector space V that has no finite basis"
    }, {
      word: "inverse",
      definition: "an n x n matrix A^-1 such that AA^-1 = A^-1A = I"
    }, {
      word: "invertible matrix",
      definition: "a square matrix that possesses an inverse"
    }, {
      word: "isomorphic vector spaces",
      definition: "two vector spaces V and W for which there is a one-to-one linear transformation T that maps V onto W"
    }, {
      word: "isomorphism",
      definition: "a one-to-one linear mapping from one vector space onto another"
    }, {
      word: "kernel",
      definition: "the set of x in V such that T(x) = 0"
    }, {
      word: "left inverse",
      definition: "any rectangular matrix C such that CA = I"
    }, {
      word: "linear combination",
      definition: "a sum of scalar multiples of vectors, the scalars are called the weights"
    }, {
      word: "linear dependence relation",
      definition: "a homogeneous vector equation where the weights are all specified and at least one weight is nonzero"
    }, {
      word: "linear equation",
      definition: "an equation that can be written in the form a1x1+ a2x2 + ..... anxn = b where b and the coefficients are real numbers"
    }, {
      word: "linearly dependent",
      definition: "an indexed set {v1, .. , vp} with the property that there exist weights c1, ... , cp, not all zero, such that c1v1 + c2v2 + ... + cpvp = 0. That is, the vector equation c1v1 + c1v2 + ... + cpvp = 0 has a non trivial solution"
    }, {
      word: "linearly independent",
      definition: "an indexed set {v1, ..., vp} with the property that the vector equation c1v1 + c2v2 + ... + cnvn = 0 has only the trivial solution"
    }, {
      word: "linear system",
      definition: "a collection of one or more linear equations involving the same variables, x1....xn"
    }, {
      word: "linear transformation",
      definition: "1. T (u + v) = T (u) + T (v) for all u, v, in the domain of T; 2. T (cu) = cT(u) for all u and scalars c"
    }, {
      word: "main diagonal",
      definition: "the entries with equal row and column indices"
    }, {
      word: "matrix equaiton",
      definition: "Ax = b"
    }, {
      word: "matrix for T relative to bases B and C",
      definition: "M = [[T (b1)]C [T(b2)]C ... [T (bn) ]C]; a matrix representation of T"
    }, {
      word: "matrix transformation",
      definition: "a mapping x |-> Ax where A is an m x n matrix and x represents any vector in Rn"
    }, {
      word: "minimal spanning set",
      definition: "a set B that spans H and has the property that if one of the elements of is removed from B then the new set does not span H"
    }, {
      word: "non homogenous equation",
      definition: "Ax = b with b not equal to 0"
    }, {
      word: "nonsingular",
      definition: "an invertible matrix"
    }, {
      word: "nontrivial solution",
      definition: "a nonzero solution of a homogeneous equation or system of homogeneous equations"
    }, {
      word: "null space",
      definition: "The null space of an mxn matrix A, written nul A, is the set of all solutions of the homogeneous equation Ax=0; that is Nul A={x:x is in Rn and Ax=0}"
    }, {
      word: "parametric equation of line",
      definition: "x = p + tv"
    }, {
      word: "pivot",
      definition: "a nonzero number that either is used in a pivot position to create zeros through row operations"
    }, {
      word: "product Ax",
      definition: "the linear combination of the columns of A using the corresponding entries in x as weights"
    }, {
      word: "range",
      definition: "the set of all vectors of the form T(x) for some x in the domain of T"
    }, {
      word: "rank",
      definition: "the dimension of the column space of A, rank A"
    }, {
      word: "row space",
      definition: "the set Row A of all linear combinations of the vectors formed from the rows of A, Col A^T"
    }, {
      word: "set spanned by {v1....vp}",
      definition: "the set Span{v1.....vp}"
    }, {
      word: "singular",
      definition: "a square matrix that has no inverse"
    }, {
      word: "solution set",
      definition: "the set of all possible solutions of a linear system, set is empty when the linear system is inconsistent"
    }, {
      word: "span{v1....vp}",
      definition: "the set of all linear combinations of v1.....vp"
    }, {
      word: "spanning set",
      definition: "any set {v1....vp} in H such that H = span {v1.....vp}"
    }, {
      word: "standard basis",
      definition: "the basis E = {e1....en}"
    }, {
      word: "standard matrix",
      definition: "the matrix A such that T(x) = Ax for all x in the domain T"
    }, {
      word: "subspace",
      definition: "A subset H of some vector space V such that H has these properties: (1) the zero vector of V is in H; (2) H is closed under vector addition; and (3) H is closed under multiplication by scalars"
    }, {
      word: "system of linear equations",
      definition: "a set of two or more equations with two or more variables"
    }, {
      word: "transformation function",
      definition: "a rule that assigns to each vector x in Rn a unique vector T(x) in Rm"
    }, {
      word: "transpose",
      definition: "an n x m matrix A^T whose columns are the corresponding rows of the m x n matrix A"
    }, {
      word: "vector",
      definition: "a list of numbers, matrix with only one column"
    }, {
      word: "vector equation",
      definition: "an equation involving a linear combination of vectors with undetermined weights"
    }, {
      word: "vector space",
      definition: "a set of objects, called vectors, on which two operations are defined, ten axioms"
    }, {
      word: "zero subspace",
      definition: "the subspace {0} consisting of only the zero vector"
    }, {
      word: "zero vector",
      definition: "unique vector such that the entries are all zero"
    }

];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    //=========================================================================================================================================
    //TODO: Add articles like 'a', 'an', and 'the'
    //=========================================================================================================================================
    'getRandomVocab': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex].word + ' is ' + factArr[factIndex].definition;
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    //=========================================================================================================================================
    //TODO: Create handler for questions
    //=========================================================================================================================================
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
