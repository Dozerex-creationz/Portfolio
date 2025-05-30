
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

class ContactService {
  // Mock API endpoint - replace with your actual backend endpoint
  private apiURL = '/api/contact';

  async submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    try {
      // Mock implementation - replace with actual API call
      console.log('Submitting contact form:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful response
      return {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      };
      
      // Actual implementation would look like this:
      /*
      const response = await fetch(this.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
      */
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      };
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateForm(formData: ContactFormData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!formData.name.trim()) {
      errors.push('Name is required');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!this.validateEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.message.trim()) {
      errors.push('Message is required');
    } else if (formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const contactService = new ContactService();
