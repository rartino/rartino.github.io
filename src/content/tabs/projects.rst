:Title: Rickard Armiento: Diploma and Project Work Opportunities
:Date: 2001-08-16
:Version: 1
:Author: Rickard Armiento

Diploma and Project Work Opportunities
======================================

.. comment

  .. figure:: https://lh5.googleusercontent.com/CmNVWHdBjIUrd_IjBN1ASCDrkQoRMb4pWjBzkCnKhCS8ZorTq3G2ZgRyPonJ4Pv_y6kJpJHy8RKFsdIFT9bQsvetcs3--6RPUqBNH5ZB95zN8EAkJac=w472
       :alt: 
       :align: right
      
  .. figure:: https://lh5.googleusercontent.com/JcISKV6cOxCFCivQPrYp7dlTdzEeAuKW11bVLY66IMlvFpVGChn7AqYcBEptnnzRiDliGRj5k8RFGkGJKWnZqXKilJ66SUZUlxSdpHxLzUc-hiSwOld8=w371
       :alt: 	    
       :align: right

*Updated: 2017-08-12. Contact point for these projects:
rickard.armiento [at] liu.se*

I can offer a large range of project work related to my own research.
This page contains shorter projects first, and then (below) lists
projects suitable on Master's thesis level.

*A short overview of my research for non-experts:* I'm working in the
field of high-throughput computation of material properties. I'm both
involved in developing new theoretical methods for such computations,
and in using these methods to discover (or predict discovery) of new
materials using theoretical methods.

In essence, we make up 'theoretical' crystal structures (for example, by
adding / removing / exchanging atoms in known materials). Then we run
computer software that solves the underlying quantum mechanical problem
for the electrons in these materials, and this way we can predict if any
of these materials could possibly be created in reality, and if so, what
properties they would have. This way we can search for materials that
could be created for use in, for example, the next generation of solar
cells, batteries, and similar. This is, in a way, a brute-force method
for discovering new materials.

Smaller Projects (Suitable for project courses, 1-2 weeks of work or more.)
---------------------------------------------------------------------------

Software-related projects
~~~~~~~~~~~~~~~~~~~~~~~~~

**Contact point for these projects: rickard.armiento [at] liu.se**

I lead the initiative behind the `Open Materials
Database <http://www.google.com/url?q=http%3A%2F%2Fopenmaterialsdb.se&sa=D&sntz=1&usg=AFQjCNG-uHa7mrYl-KzBjpxjwykqHovL8g>`__,
a searchable archive of computational results for materials. It is built
upon a scientific software framework of our own design written in
python, the `High-Throughput
Toolkit <http://www.google.com/url?q=http%3A%2F%2Fhttk.openmaterialsdb.se&sa=D&sntz=1&usg=AFQjCNHWaON7YhAY6dq1cfV8GRK5pbmsTQ>`__.
This is a tool we actively use in our research.

We have a large list of smaller projects for extending this framework
and the website which belong to the interface between science and
software development. These are subject to change, but the present list
of possible project ideas follows:

-  **Connect our toolkit to improved visualization tools.** We already
   have some basic visualization provided via Jmol. But, our research
   group is connected to the developers of the Interactive Visualization
   Workshop (Inviwo), and this project is to set up a first 'connector'
   between our framework and Inviwo that provides a simple crystal
   structure visualization.
-  **Visualization of crystal structures in ray-tracing
   software.**\ Another visualization feature that would be immensely
   useful for our framework is the ability to generate extremelymly
   high-quality figures using ray-tracing imaging. This project is to
   build a 'connector' from our framework to generate visualizations in
   the ray-tracing software package powray.
-  **Better support for molecules in our framework.** Our framework was
   built to treat periodic crystals but it has a basic support for
   non-periodic systems. This project is to look at how to how molecues
   should be represented in our database, what tools will be needed to
   be built to operate on molecules with the same flexibility as we have
   for crystals, and how to visualize them with the same tools that we
   use for periodic crystals.
-  **Support for surface physics.** Presently the framework is mostly
   focused on bulk crystals and bulk crystal properties. This project
   starts to look at the extension of our tools into generating surface
   models and to interface with computational software to find their
   properties. While this in total is a major undertaking, clear small
   project tasks can be formulated within this effort.
-  **Implement a new type of computation for predicting materials
   properties.**\ Today there exists a large amount of computational
   software for predicting a wide range of properties of materials. So
   far support for only a limited set is supported via our framework. We
   are continously looking to expand this set so that new types of
   materials property calculations can be generated and analyzed. This
   project requires one to dig down into the rather complex software
   that we use for running fault-tolerant computational tasks across
   supercomputers, and then implement a new calculation type from our
   wishlist of the more 'easy' types.
-  **Automatic phase diagrams.**\ The framework presently has some
   support for phase diagrams, and the database contains information
   needed to generate phase diagrams for a number of materials. This
   project is to write software to automatize generation of phase
   diagrams for a large set of our materials and make them available on
   the website.
-  **Extended search capabilities.**\ Presently the website exposes a
   tiny fraction of the possibilities for 'searching' that exist within
   our database. This project is to look at extending the search types
   in a user and researcher-friendly way. Note that this is not meant to
   be software development-only project. To understand what and how this
   information should be searched requires understanding both of what
   the information means and how researchers are using it.
-  **A first basic GUI for automatized calculations.**\ The framework
   presently allows for setting up computations, retreive the results
   and analyze them with command-line tools. This project is to start up
   the development of a simple GUI with similar capabilitires. Note that
   this is not meant to be software development-only project. To
   understand how to build a useful tool and the typical workflow will
   require a basic understanding of these physics-based software
   packages.
-  **Expose our data in an IOS or Android app.** The website works fine
   for mobile users, but it is a goal for universities in Sweden to
   expose research to the broader public. This project starts looking at
   creating an "app" that exposes materials science data and
   visualization with a certain 'wow' factor for the general public. By
   utilizing the website and one of several "quick app developer" tools
   available, we expect getting a first prototype up and running fits
   within the time-frame of a smaller project.
-  **Extend the import / export capabilities.**\ We are presently rather
   limited in the types of file formats that can be read/written via the
   framework. This project is for someone techincally-inclined who would
   find it interesting to dig down in various crystal structure and
   electronic structure file formats and look at writing converters /
   readers / writers for such data. (To understand scientific data
   formats typically requires a level of understanding of the science
   beind them.)
-  **Any idea of your own!**\ Take a look at what we offer at the
   `website <http://www.google.com/url?q=http%3A%2F%2Fopenmaterialsdb.se&sa=D&sntz=1&usg=AFQjCNG-uHa7mrYl-KzBjpxjwykqHovL8g>`__
   and with the
   `toolkit <http://www.google.com/url?q=http%3A%2F%2Fhttk.openmaterialsdb.se&sa=D&sntz=1&usg=AFQjCNHWaON7YhAY6dq1cfV8GRK5pbmsTQ>`__.
   If you have an idea of some feature that would be interesting to
   extend, or add, feel free to discuss your idea for a project with us!

Larger Projects (Master's thesis, etc.)
---------------------------------------

Projects in applied high-throughput computation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Contact point for these projects: rickard.armiento [at] liu.se**

These projects involve running large-scale database-driven computations,
using state-of-the art computational software and working with
collections of thousands of material candidates. The project will
involve work on software development on our high-throughput
computational framework for automatic job creation, submission,
retrieval, collection into databases, and automatic analysis.

1. *High-throughput search of promising piezoelectric fluoride
   perovskites.* A vast chemical space of possible perovskite-type
   structures will be screened for materials with beneficial properties to
   work as modern high-performing peizoelectric materials. Modern
   computational methods can identify known perovskite oxides currently
   used or proposed as piezoelectric materials. However, the space of
   perovskite oxides have more or less been exhaustively explored. This
   project aims at investigating the closely related, but much less known,
   space of perovskite fluorides. The project may further expand into
   investigating other properties of perovskites, e.g., band gaps suitable
   for solar applications in both oxides and fluorides. The project will be
   done together with Rickard Armiento at IFM and in collaboration with
   Igor Abrikosov at IFM, Marco Fornari at Central Michigan University,
   USA, and Boris Kozinsky at Robert Bosch LLC, Cambridge, USA.

2. *High-throughput estimate of formation energies for rapid
   assessment of new materials*. To be able to quickly estimate the
   formation energy of a system to find what materials are at all likely to
   be formable is a key component of high-through computational methods.
   The project aims at evaluating a few very fast methods for such
   estimates. We will test a few effective potential-based methods,
   orbital-free DFT, and exciting new machine-learning methods. For a PhD
   project this could either expand into further developing and improving
   such techniques and/or their application to our high-throughput
   problems. The project will be done together with Rickard Armiento at IFM
   and in collaboration with Igor Abrikosov at IFM, and, for the
   machine-learning part, in collaboration with Anatole von Lilienfeld at
   Argonne National Laboratory, Illinois, USA.

Projects in Density Functional Theory, Functional Development
-------------------------------------------------------------

These projects involve in-depth theoretical work in quantum physics,
mathematical physics, and to some extent numerical methods with the aim
of improving the theoretical methods used to, e.g., predict material
properties using computer simulations. Some projects also involve
programming and running modern computational software to implement and
test the theoretical results.

*This category of projects change frequently, email me for suggestions.*

