import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  activeTab: string = 'All';
  selectedProject: any = null;

  tabs = ['All', 'Energy Audits', 'Electrical Systems', 'Water Management', 'Infrastructure Repairs'];

  achievements = [
    {
      id: 1,
      title: 'Industrial HVAC Optimization',
      category: 'Energy Audits',
      image: '/images/achievements/gallery-1.jpg',
      fullImage: '/images/achievements/gallery-1.jpg',
      description: 'Optimized the HVAC system for a large manufacturing plant, resulting in 20% energy savings.'
    },
    {
      id: 2,
      title: 'Solar Panel Installation',
      category: 'Electrical Systems',
      image: '/images/achievements/gallery-2.jpg',
      fullImage: '/images/achievements/gallery-2.jpg',
      description: 'Comprehensive electrical audit of an automotive facility to ensuring fire safety and efficiency.'
    },
    {
      id: 3,
      title: 'Water Treatment Plant (WTP)',
      category: 'Water Management',
      image: '/images/achievements/gallery-3.jpg',
      fullImage: '/images/achievements/gallery-3.jpg',
      description: 'Restructured the Sewage Treatment Plant protocols to meet environmental compliance standards.'
    },
    {
      id: 4,
      title: 'Building Foundation Repair',
      category: 'Infrastructure Repairs',
      image: '/images/achievements/gallery-4.jpg',
      fullImage: '/images/achievements/gallery-4.jpg',
      description: 'Waterproofing and structural reinforcement of a high-rise basement infrastructure.'
    }
  ];

  get filteredAchievements() {
    if (this.activeTab === 'All') return this.achievements;
    return this.achievements.filter(a => a.category === this.activeTab);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  openPopup(project: any) {
    this.selectedProject = project;
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
