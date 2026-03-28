class StudySetsController {
    // [GET]
    index(req, res) {
        const mockStudySets = [
            {
                id: 1,
                title: 'Từ Vựng Đời Sống',
                category: 'Vocabulary',
                description: 'Từ Vựng dành cho bạn trình độ A1',
                total: 50,
                learned: 32,
                reviews: 15,
            },
            {
                id: 2,
                title: 'Từ vựng A2',
                category: 'Vocabulary',
                description: 'Từ Vựng dành cho bạn trình độ A2',
                total: 68,
                learned: 45,
                reviews: 22,
            },
            {
                id: 3,
                title: 'Grammar Tenses',
                category: 'Grammar',
                description: 'Complete guide to English tenses and their usage',
                total: 42,
                learned: 42,
                reviews: 8,
            },
            {
                id: 4,
                title: 'Business English',
                category: 'Business',
                description: 'Professional vocabulary for international business',
                total: 55,
                learned: 21,
                reviews: 10,
            },
            {
                id: 5,
                title: 'Daily Conversation Starters',
                category: 'Daily',
                description: 'Common phrases and idioms for everyday talk',
                total: 38,
                learned: 28,
                reviews: 19,
            },
            {
                id: 6,
                title: 'Vocabulary: Nature & Environment',
                category: 'Vocabulary',
                description: 'Words and phrases related to nature and ecology',
                total: 45,
                learned: 18,
                reviews: 5,
            },
            {
                id: 7,
                title: 'Medicine & Health',
                category: 'Vocabulary',
                description: 'Medical terminology and health-related vocabulary',
                total: 52,
                learned: 33,
                reviews: 11,
            },
            {
                id: 8,
                title: 'Academic Collocations',
                category: 'Grammar',
                description: 'Word combinations commonly used in academic writing',
                total: 60,
                learned: 44,
                reviews: 16,
            },
        ];

        res.send(mockStudySets);
    }
};

module.exports = new StudySetsController;