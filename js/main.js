document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    htmlElement.classList.add("dark-theme")
  }

  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark-theme")
    const currentTheme = htmlElement.classList.contains("dark-theme") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
  })

  // Mobile Search Toggle
  const mobileSearchToggle = document.getElementById("mobile-search-toggle")
  const mobileSearch = document.getElementById("mobile-search")

  if (mobileSearchToggle && mobileSearch) {
    mobileSearchToggle.addEventListener("click", () => {
      mobileSearch.classList.toggle("show")
    })
  }

  // Sidebar Submenu Toggle
  const submenuToggles = document.querySelectorAll(".submenu-toggle")

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const submenu = this.nextElementSibling
      const isExpanded = this.classList.contains("expanded")

      // Toggle current submenu
      this.classList.toggle("expanded")
      submenu.classList.toggle("show")

      // Update ARIA attributes
      this.setAttribute("aria-expanded", !isExpanded)
    })
  })

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the tab panel id from the aria-controls attribute
      const panelId = this.getAttribute("aria-controls")

      // Remove active class from all tabs and panels
      document.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("active")
        tab.setAttribute("aria-selected", "false")
      })

      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.remove("active")
      })

      // Add active class to current tab and panel
      this.classList.add("active")
      this.setAttribute("aria-selected", "true")
      document.getElementById(panelId).classList.add("active")
    })
  })

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header")

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionContent = this.nextElementSibling
      const isExpanded = this.getAttribute("aria-expanded") === "true"

      // Toggle expanded state
      this.setAttribute("aria-expanded", !isExpanded)
      accordionContent.classList.toggle("expanded")
    })
  })

  // Scroll to top button
  const scrollTopButton = document.getElementById("scroll-top")

  if (scrollTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopButton.classList.add("visible")
      } else {
        scrollTopButton.classList.remove("visible")
      }
    })

    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Table of contents active link highlighting
  const tocLinks = document.querySelectorAll(".toc-link")
  const contentHeadings = document.querySelectorAll(".doc-content h2, .doc-content h3")

  if (tocLinks.length > 0 && contentHeadings.length > 0) {
    const observerOptions = {
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    }

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all TOC links
          tocLinks.forEach((link) => {
            link.classList.remove("active")
          })

          // Add active class to the corresponding TOC link
          const activeId = entry.target.id
          const activeLink = document.querySelector(`.toc-link[href="#${activeId}"]`)
          if (activeLink) {
            activeLink.classList.add("active")
          }
        }
      })
    }, observerOptions)

    contentHeadings.forEach((heading) => {
      headingObserver.observe(heading)
    })

    // Smooth scrolling for TOC links
    tocLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    })
  }
})
